import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserType } from 'src/auth/enum/user-type.enum';

export const RefineUserById = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { id, email, type } = request.user;
    let typeById;
    type === UserType.INCUMBENT
      ? (typeById = { incumbent_id: id })
      : (typeById = { student_id: id });
    return typeById;
  },
);
