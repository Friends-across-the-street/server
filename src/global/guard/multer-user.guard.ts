import { Request } from 'express';
import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CustomException } from 'src/global/exception/custom.exception';
import { users } from 'prisma/generated/mysql';

interface RequestUser extends Request {
  user: users;
}

@Injectable()
export class MulterUserGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequestUser = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: RequestUser) {
    if (Number(request.params.userId) !== request.user.id) {
      throw new CustomException('잘못된 접근입니다.', 403);
    }
    return true;
  }
}
