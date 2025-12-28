"use client";
import "./modalmedia.css";
import { ImCross } from "react-icons/im";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function modalmedia({ data, Click, ind }) {
  const [actualindex, setIndex] = useState(ind);
  const item = data.find((item, index) => index === actualindex);
  const lg = data.length;
  const ref = useRef(null);

  const leftnav = () =>
    setIndex(actualindex > 0 ? actualindex - 1 : data?.length - 1);
  const rightnav = () => setIndex(actualindex < lg - 1 ? actualindex + 1 : 0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (ref.current) ref.current.focus();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const usekeyboard = (e) => {
    if (e.key === "ArrowRight") {
      rightnav();
    }
    if (e.key === "ArrowLeft") {
      leftnav();
    }
    if (e.key === "Escape") {
      Click();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", usekeyboard);
    const root = ref.current;
    if (!root) return;
    root.focus();
  }, []);

  return (
    <div className="modalmedia" ref={ref} tabIndex={-1} role="modal">
      <ImCross
        className="exit"
        aria-label="exit or press echap"
        alt="exit"
        tabIndex={0}
        onClick={Click}
      />
      <div className="contentmodal">
        <FaAngleLeft
          aria-label="précedent"
          alt="Precedent"
          className="arrow"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && leftnav()}
          onClick={leftnav}
        />
        {item && item.image && (
          <Image
            className="media"
            src={`/${item.image}`}
            width={400}
            height={300}
            alt={item.title}
          />
        )}
        {item && item.video && (
          <video
            className="media"
            alt={item.title}
            src={`/${item.video}`}
            autoPlay
            loop
          />
        )}
        <FaAngleRight
          className="arrow"
          aria-label="suivant"
          alt="Suivant"
          tabIndex={0}
          onClick={rightnav}
          onKeyDown={(e) => e.key === "Enter" && rightnav()}
        />
      </div>
    </div>
  );
}
