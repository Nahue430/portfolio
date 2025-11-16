import { useEffect, useState } from "react";

const ScrollProgress = (): JSX.Element => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary z-[9999] transition-all duration-150 ease-out"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;
