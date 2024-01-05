import { Request } from 'express';
import { Observable } from 'rxjs';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { incumbent_users, student_users } from '@prisma/client';

interface RequestUser extends Request {
  user: incumbent_users | student_users;
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
    const jwtString = request.headers.authorization.split('Bearer ')[1];
    const payload = await this.authService.verify(jwtString);
    request.user = {
      ...payload,
    };
    return true;
  }
}
