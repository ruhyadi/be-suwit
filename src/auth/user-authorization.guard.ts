import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class UserAuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const userId = +request.params.id;

    if (user.userId !== userId) {
      throw new ForbiddenException(
        'You are not allowed to manipulate this data',
      );
    }

    return true;
  }
}
