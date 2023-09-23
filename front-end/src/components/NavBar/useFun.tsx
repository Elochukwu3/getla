import { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { ROUTES } from "@assets/utils/routes";

import { useNavigate } from "react-router-dom";
function useFuns(callback: React.Dispatch<React.SetStateAction<Boolean>>) {
  const location = useLocation();
  const navigate = useNavigate();
  const info = {
    spy: true,
    smooth: true,
    duration: 1000,
  };

  const handler = (val: Boolean): void => {
    if (location.pathname !== ROUTES.home) {
      navigate(ROUTES.home);
    }
    callback(!val);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        callback(false);
      }
      callback(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);
  return {handler, info}
}

export default useFuns;

