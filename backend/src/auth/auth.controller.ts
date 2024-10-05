import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { LoginUserDto } from 'src/auth/dto/login-user-dto';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('registration')
  registration(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Put('password')
  passwordEdit(@Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.passwordEdit(changePasswordDto)
  }
}
