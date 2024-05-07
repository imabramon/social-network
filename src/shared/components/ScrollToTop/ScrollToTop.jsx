import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.log('use effect')
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;