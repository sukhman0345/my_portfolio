import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./CustomNavbar";
import "./NavBar.css";

export const NavBar = () => {
  const staticText = "Hi, I am Sukhman Singh,";

  // Texts to loop through
  const phrases = useMemo(() => [
    "Expertises in DSA",
    "Expertises in C++",
    "Expertises in Java",
    "Expertises in Python",
  ], []);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // character index
  const [phraseIndex, setPhraseIndex] = useState(0); // 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDelete = 1000;

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, index + 1));
        if (index + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        } else {
          setIndex(index + 1);
        }
      } else {
        setText(currentPhrase.substring(0, index - 1));
        if (index === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setIndex(index - 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [index, isDeleting, phraseIndex, phrases]);

  return (
    <div className="navbar-container">
      <CustomNavbar />

      <div className="hero-container">
        <h1>
          <span className="static-text">{staticText}</span>
        </h1>
        <h1>
          <span className="animated-text">{text}</span>
        </h1>
        
      </div>
    </div>
  );
};

export default NavBar;
