import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/login-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateIncumbentUserDto } from './dto/create-incumbent-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '회원가입 처리' })
  @ApiResponse({ status: 200, description: '회원가입 성공' })
  @Post('/signup/incumbent')
  async signupIncumbentUser(@Body() dto: CreateIncumbentUserDto) {
    return await this.authService.signupIncumbentUser(dto);
  }

  @ApiOperation({ summary: '로그인 처리' })
  @ApiResponse({ status: 200, description: '로그인 성공' })
  @ApiResponse({ status: 404, description: '로그인 정보 찾을 수 없음' })
  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    const user = await this.authService.validateUser(email, password);
    const token = await this.authService.createToken(user);
    return token;
  }
}
