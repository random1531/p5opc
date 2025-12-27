"use client";
import "./sort.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function sort({ likes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Popularité");

  const handleClose = (e) => {
    setSelected(e);
    setIsOpen(!isOpen);
  };

  return (
    <div className="list">
      {!isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
          aria-label={`trier par ${selected}`}
          className="listSort"
          tabIndex={0}
        >
          <p>{selected}</p>
          <FaChevronDown />
        </div>
      )}
      {isOpen && (
        <div className="listSortExtand">
          <div>
            <div
              onClick={() => handleClose("Popularité")}
              className="firstsort"
            >
              <option
                onClick={likes}
                value="Popularité"
                onKeyDown={(e) =>
                  e.key === "Enter" && handleClose("Popularité")
                }
              >
                Popularité
              </option>
              <FaChevronUp />
            </div>
            <hr></hr>
            <div
              onClick={() => handleClose("Date")}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClose("Date")}
            >
              <option
                onClick={likes}
                onKeyDown={(e) => e.key === "Enter" && handleClose("Date")}
                value="Date"
              >
                Date
              </option>
            </div>
            <hr></hr>
            <div
              onClick={() => handleClose("Titre")}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClose("Titre")}
            >
              <option
                onClick={likes}
                onKeyDown={(e) => e.key === "Enter" && handleClose("Titre")}
                value="Titre"
              >
                Titre
              </option>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
