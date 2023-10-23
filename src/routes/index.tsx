import { useNavigate, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { Landing } from "../features/misc";
import React, { useEffect } from "react";

export const AppRoutes = () => {
  const navigate = useNavigate();
  let auth = true;
  const commonRoutes = [{ path: "/", element: <Landing /> }];
  const routes = auth ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return <>{element}</>;
};
