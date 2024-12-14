import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import jwtConfig from './jwt.config';

@Module({
  imports: [JwtModule.registerAsync(jwtConfig), UserModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
