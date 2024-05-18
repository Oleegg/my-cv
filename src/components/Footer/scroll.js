import { useEffect, useState } from "react";

const Scroll = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // console.log(scroll, document.documentElement.clientHeight);
  return { scroll, clientHeight: document.documentElement.clientHeight };
};

export default Scroll;
