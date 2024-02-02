import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { userType } from 'prisma/generated/mysql';

export const RefineUserById = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { id, email, type } = request.user;
    let typeById;
    type === userType.incumbent
      ? (typeById = { incumbentId: id })
      : (typeById = { studentId: id });
    return typeById;
  },
);
