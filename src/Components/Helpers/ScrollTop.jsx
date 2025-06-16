import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500); 

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;