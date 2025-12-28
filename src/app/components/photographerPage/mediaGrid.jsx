"use client";
import { useState } from "react";
import MediaCard from "../photographerPage/cardmedia/cardmedia";
import "./photographer.css";
import Sort from "./sort/sort";
export default function dataphoto({ params }) {
  const [media, setMedia] = useState(params.sort((a, b) => b.likes - a.likes));
  const handlselect = (e) => {
    const selected = e.target.value;
    if (selected === "Popularité") {
      setMedia([...params].sort((a, b) => b.likes - a.likes));
    }
    if (selected === "Titre") {
      setMedia(
        [...params].sort((a, b) => {
          const titleA = a.title ? a.title.toUpperCase() : "";
          const titleB = b.title ? b.title.toUpperCase() : "";
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (selected === "Date") {
      setMedia([...params].sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  };

  return (
    <>
      <Sort likes={handlselect} />
      <nav className="containermedia">
        {media.length === 0 ? (
          <div>Chargement...</div>
        ) : (
          media.map((e, index) => (
            <MediaCard
              key={e.id}
              title={e.title}
              idx={index}
              picture={e.image}
              picturename={e.title}
              nblike={e.likes}
              video={e.video}
              id={e.id}
              dataformodal={media}
            />
          ))
        )}
      </nav>
    </>
  );
}
