import { Request } from 'express';
import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { incumbents, students } from '@prisma/client';
import { CustomException } from 'src/global/exception/custom.exception';

interface RequestUser extends Request {
  user: incumbents | students;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequestUser = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: RequestUser) {
    if (!request.headers.authorization) {
      throw new CustomException('헤더의 Auth 토큰이 존재하지 않습니다', 401);
    }
    const jwtString = request.headers.authorization.split('Bearer ')[1];
    let payload;
    try {
      payload = await this.authService.verify(jwtString);
    } catch (e) {
      throw new CustomException('토큰이 일치하지 않습니다.', 403);
    }
    request.user = {
      ...payload,
    };
    return true; //
  }
}
