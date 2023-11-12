import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import Slide from "./Slide";
("../../../");

const images = [
  { image: banner1 },
  { image: banner2 },
  { image: banner3 },
  { image: banner4 },
  { image: banner5 },
  { image: banner6 },
];

export default function Banner() {
  return (
    <div className="carousel h-[80vh] w-full">
      {images.map((obj, index) => (
        <Slide key={index} img={obj.image} index={index} />
      ))}
    </div>
  );
}
