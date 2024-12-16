import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const isAuthenticated = true;

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
