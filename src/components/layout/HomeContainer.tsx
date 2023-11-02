import { DHLayout } from "@daohaus/connect";
import { Footer, H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";

export const HomeContainer = () => {
  const location = useLocation();

  return (

      <Outlet />

  );
};
