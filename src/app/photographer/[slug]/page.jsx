import HeadPhoto from "../../components/photographerPage/photographerInfo";
import Mediaphoto from "../../components/photographerPage/mediaGrid";
import Bottominfo from "@/app/components/photographerPage/bottominfo/bottominfo";
import {
  getAllMediasForPhotographer,
  getPhotographer,
} from "../../lib/prisma-db";
export default async function photographer({ params }) {
  const { slug } = await params;
  const mediaphotographer = await getAllMediasForPhotographer(parseInt(slug));
  const photographer = await getPhotographer(parseInt(slug));

  console.log(mediaphotographer.map((i) => i.likes).reduce((a, b) => a + b));
  return (
    <div className="pagephotographer">
      <Bottominfo
        price={photographer.price}
        totallikes={mediaphotographer
          .map((i) => i.likes)
          .reduce((a, b) => a + b)}
      />
      <HeadPhoto params={photographer} />
      <Mediaphoto params={mediaphotographer} />
    </div>
  );
}
