import { useEffect, useRef } from "react";
import {gsap} from "gsap"

const Sidebar = () => {
  const navBtnRef = useRef(null);
  const navMenuRef = useRef(null);
  
  useEffect(() => {
    const handleClick = () => {
      gsap.fromTo("#hamMenu", 
        {opacity: -1, y:120},
        {opacity: 1, duration: 0.4, y:0, ease: "circ"}
      )
      if (navMenuRef.current) {
        navMenuRef.current.classList.toggle("hidden");
        navMenuRef.current.classList.toggle("flex");
      }
    };

    const btn = navBtnRef.current;
    btn?.addEventListener("click", handleClick);

    // Cleanup on unmount
    return () => {
      btn?.removeEventListener("click", handleClick);
    };

  }, []);

  
  return (
    <>
      <nav className="md:hidden flex justify-between px-5 py-5 border-b-2 border-gray-500 min-w-screen" id="Header">
        <div className="flex gap-3">
          <p>
            <a href="/">{"Ganti Rama Devi"}</a>
          </p>
        </div>
        <button id="hamBtn" className="" ref={navBtnRef}>☰</button>
      </nav>
      <div
        id="hamMenu"
        ref={navMenuRef}
        className="hidden opacity-100 w-[100%] h-[90%] absolute bg-black justify-center items-center flex-col z-10"
      >
        <p className="text-white">
          <a href="/">Home</a>
        </p>
        <p className="text-white">
          <a href="/about">About Me</a>
        </p>
        <p className="text-white">
          <a href="/novels">Novels</a>
        </p>
        <p className="text-white">
          <a href="/contact">Contact</a>
        </p>
      </div>
    </>
  );
};

export default Sidebar;
