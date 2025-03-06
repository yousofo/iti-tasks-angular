import { CanActivateFn } from '@angular/router';

export const accountGuard: CanActivateFn = (route, state) => {
  return true;
};
