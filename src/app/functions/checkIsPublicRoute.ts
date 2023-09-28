import { APP_ROUTES } from "../constants/router";

/**
 * @param asPath
 * @returns
 */
export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  return appPublicRoutes.includes(asPath);
};
