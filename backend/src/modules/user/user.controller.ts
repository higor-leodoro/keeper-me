import {
  Controller,
  Post,
  Get,
  Body,
  HttpStatus,
  HttpCode,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() userDto: UserDto) {
    await this.userService.create(userDto);
    return { message: 'User created successfully' };
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findUserById(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    return user;
  }
}
