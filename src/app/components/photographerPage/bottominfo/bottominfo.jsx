import "./bottominfo.css";
import { FaHeart } from "react-icons/fa";

export default function bottominfo({ totallikes, price }) {
  return (
    <div className="bottominfo">
      <div className="heatbottom">
        <span>{totallikes}</span>
        <FaHeart />
      </div>
      <span>{price}€/jour</span>
    </div>
  );
}
