import { getAllPhotographers } from "../lib/prisma-db";
import Image from "next/image";
import "./photographers.css";
import Link from "next/link";

export default async function photographers() {
  const DataPhotographer = await getAllPhotographers();

  return (
    <nav className="photographers">
      {DataPhotographer && DataPhotographer.length > 0 ? (
        DataPhotographer.map((item) => (
          <Link
            href={`/photographer/${item.id}`}
            aria-label={`Accédez à la page de ${item.name}`}
            key={item.id}
          >
            <article className="photographercard">
              <Image
                className="photographerportrait"
                src={`/${item.portrait}`}
                alt={item.name}
                width={300}
                height={300}
              />
              <h2 className="photographername">{item.name}</h2>
              <p className="photographerlocalisation">
                {item.city}, {item.country}
              </p>
              <p className="photographertagline">{item.tagline}</p>
              <p className="photographerprice">{item.price}€/jour</p>
            </article>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </nav>
  );
}
