import { Route } from '@/route.constants';

export const protectedRoutes = [
  Route.Engines,
  Route.Profile,
  Route.Railcars,
  Route.Trains,
];
export const authRoutes = [Route.Login];
export const publicRoutes = [Route.About, Route.Home];
