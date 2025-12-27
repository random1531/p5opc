"use client";
import "./buttonmodal.css";
import Image from "next/image";
import { useState } from "react";
import ModalMedia from "../modal/ModalMedia";
export default function picturecard({
  picture,
  video,
  picturename,
  dataformodal,
  indexselected,
}) {
  const [isOpen, setisOpen] = useState(false);
  const [index, setIndex] = useState();

  const handleCilck = () => {
    setisOpen(!isOpen);
    setIndex(indexselected);
  };

  return (
    <>
      {picture && (
        <Image
          onClick={handleCilck}
          onKeyDown={(e) => e.key === "Enter" && handleCilck()}
          tabIndex={0}
          aria-label={`image ${picturename}`}
          className="video"
          src={`/${picture}`}
          alt={picturename}
          width={350}
          height={300}
        />
      )}
      {video && (
        <video
          onClick={handleCilck}
          onKeyDown={(e) => e.key === "Enter" && handleCilck()}
          tabIndex={0}
          className="video"
          aria-label={`video ${picturename}`}
          src={`/${video}`}
          alt={picturename}
          autoPlay
          loop
        />
      )}
      {isOpen && (
        <ModalMedia
          ind={index}
          Click={() => setisOpen(!isOpen)}
          data={dataformodal}
        />
      )}
    </>
  );
}
