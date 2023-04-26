import { BannerImage } from "../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {BannerImage.map((banner) => {
        let { id, image, title, subTitle, buttonText } = banner;

        return (
          <div
            key={id}
            className="relative h-[384px] sm:h-[480px] lg:h-[560px] xl:h-[760px]"
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
            <div className="absolute top-[50%] z-10 w-full translate-y-[-50%] text-white lg:text-black">
              <div className="lg:pr[400px] xl:pr[640px] container md:pr-[30%]">
                <h2 className="mb-2 text-4xl font-extrabold md:mb-4 md:text-5xl lg:text-7xl">
                  {title}
                </h2>
                <h3 className="mb-4 text-lg font-medium md:mb-6 md:text-xl">
                  {subTitle}
                </h3>
                <button className="bg-black px-6 py-1 lg:text-white">
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Hero;
