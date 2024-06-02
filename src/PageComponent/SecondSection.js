import React from "react";
import Card1 from "../Image/Card1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SecondSection = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
        </svg> */}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
        </svg> */}
      </div>
    );
  }

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  const data = [
    {
      name: `Iphone`,
      img: `/Image/Footer.jpg`,
      price: "₹10000",
    },
    {
      name: `Hp Leptop`,
      img: `../Image/Card1.png`,
      price: "₹10000",
    },
    {
      name: `Dell Keyboard`,
      img: `../Image/Card1.png`,
      price: "₹10000",
    },
    {
      name: `Asus Mouse`,
      img: `../Image/Card1.png`,
      price: "₹10000",
    },
    {
      name: `Gaming Leptop`,
      img: `../Image/Card1.png`,
      price: "₹10000",
    },
  ];

  return (
    <>
      <section className="md:mx-container">
        <div className="border-l-4 border-red-500 my-20">
          <h1 className="text-3xl ps-12 font-semibold leading-relaxed">
            DISCOVER <br /> THE COLLECTIONS
          </h1>
        </div>
        <div className="flex space-x-16 justify-between h-[700px] ">
          <div className="w-7/12 ">
            <div className="bg-theme relative">
              <div className="absolute top-[50%] right-[45%] bg-white hover:bg-black hover:text-white py-4 px-6">
                <div className="flex justify-center items-center">
                  <h1 className="text-lg">Mobile </h1>
                  <h1 className=" text-gray-400 ml-2 text-sm">Items</h1>
                </div>
              </div>
              <div className="flex justify-center text-center  ">
                <img src={Card1} alt="Mobile" className="h-[700px]" />
              </div>
            </div>
          </div>
          <div className="w-4/12 space-y-6">
            <div className="bg-theme relative">
              <div className="absolute top-[50%] right-[30%] bg-white hover:bg-black hover:text-white py-4 px-6">
                <div className="flex justify-center items-center">
                  <h1 className="text-lg">Keyboard</h1>
                  <h1 className=" text-gray-400 ml-2 text-sm">Items</h1>
                </div>
              </div>
              <div className="flex justify-center text-center  ">
                <img src={Card1} alt="Mobile" className="h-[340px]" />
              </div>
            </div>
            <div className="bg-theme relative">
              <div className="absolute top-[50%] right-[30%] bg-white hover:bg-black hover:text-white py-4 px-6">
                <div className="flex justify-center items-center">
                  <h1 className="text-lg"> Leptop </h1>
                  <h1 className=" text-gray-400 ml-2 text-sm">Items</h1>
                </div>
              </div>
              <div className="flex justify-center text-center  ">
                <img src={Card1} alt="Mobile" className="h-[340px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:mx-container">
        <div className="border-l-4 border-red-500 my-20">
          <h1 className="text-3xl ps-12 font-semibold leading-relaxed">
            POPULAR PRODUCTS
          </h1>
        </div>

        <div className="w-full">
          <div className="">
            <Slider {...settings}>
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-white h-[390px] text-black rounded-xl "
                >
                  <div className="mr-10">
                    <div className="h-64 bg-theme flex justify-center items-center rounded-t-xl">
                      <img
                        src={d.img}
                        alt=""
                        className="h-44 w-44 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col text-start gap-2 py-4">
                      <p className="text-lg font-medium text-gray-500 ">
                        {d.name}
                      </p>
                      <p className="text-gray-600 font-semibold">{d.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default SecondSection;
