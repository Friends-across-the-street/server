import { Request } from 'express';
import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CustomException } from 'src/global/exception/custom.exception';
import { userType, users } from 'prisma/generated/mysql';

interface RequestUser extends Request {
  user: users;
}

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequestUser = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: RequestUser) {
    if (!request.user) {
      throw new CustomException('유저정보를 찾을 수 없습니다.', 404);
    }

    if (request.user.type !== userType.admin) {
      throw new CustomException('권한이 없습니다.', 403);
    }

    return true;
  }
}
