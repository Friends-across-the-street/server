import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/login-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateIncumbentUserDto } from './dto/create-incumbent-user.dto';
import { CreateStudentUserDto } from './dto/create-student-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '현직자 회원가입 처리' })
  @ApiResponse({ status: 200, description: '회원가입(현직자) 성공' })
  @ApiResponse({ status: 404, description: '현직자 정보(이메일) 찾을 수 없음' })
  @Post('/signup/incumbent')
  async signupIncumbentUser(@Body() dto: CreateIncumbentUserDto) {
    return await this.authService.signupIncumbentUser(dto);
  }

  @ApiOperation({ summary: '학생 회원가입 처리' })
  @ApiResponse({ status: 200, description: '회원가입(학생) 성공' })
  @ApiResponse({ status: 404, description: '학생 정보(이메일) 찾을 수 없음' })
  @Post('/signup/student')
  async signupStudentUser(@Body() dto: CreateStudentUserDto) {
    return await this.authService.signupStudentUser(dto);
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
