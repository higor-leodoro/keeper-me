import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto } from './auth.dto';
import { compareSync as bcryptHashSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }

  async signIn(email: string, password: string): Promise<AuthResponseDto> {
    if (!email || !password) {
      throw new UnauthorizedException('Email e senha são obrigatórios');
    }

    const userExists = await this.userService.checkUserExists(email);

    if (!userExists || !bcryptHashSync(password, userExists.password)) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: userExists.id,
      email: userExists.email,
    };
    const token = this.jwtService.sign(payload);

    // await this.userService.updateUserToken(userExists.id, token);

    return { token, expiresIn: this.jwtExpirationTimeInSeconds };
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      const user = await this.userService.findById(payload.sub);

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new UnauthorizedException('Unvalid or expired token');
    }
  }
}
