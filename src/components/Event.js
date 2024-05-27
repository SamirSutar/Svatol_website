import { Carousel } from "@material-tailwind/react";
import Carousel1 from "./gallery";

export default function Events() {
  return (
    <><div className="bg-[#FFF6E7]">
    <Carousel
      loop
      autoplay
      className="rounded-xl lg:max-w-7xl h-3/4 "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={require('./gallery/EVENT1 copy.png')}
        alt="image 1"
        className="h-full w-full object-fill"
      />
      <img
        src={require('./gallery/EV2.jpg')}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={require('./gallery/EV3.jpg')}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      
    </Carousel>
    <Carousel1/>

    </div>
   </>
  );
}
