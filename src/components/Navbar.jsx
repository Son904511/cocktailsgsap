import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// tweenig is in between the start and end of the animation process of generation images between frames
const Navbar = () => {
  useGSAP(()=>{
    const navTweens=gsap.timeline({
      scrollTrigger:{
        trigger: "nav",
        start: "bottom top",//element postion viewport position(bottom of nav reaches top of viewport)
        // end: "bottom top",
        // scrub: true,
        // markers: true,
      }
    })
    navTweens.fromTo("nav", {
      // y: -100,
      // opacity: 0,
      // duration: 0.5,
      // ease: "power2.out",
      backgroundColor: "transparent",
    },{
      backgroundColor:"#00000050",
      backgroundFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut",
    });
  })
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
            <img
                src="/images/logo.png"
                alt="Velvet Logo"
                className="w-10 h-10 object-cover"/>
          <p>Velvet</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="nav-link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
