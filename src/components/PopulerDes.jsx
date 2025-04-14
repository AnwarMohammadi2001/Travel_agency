import React from "react";

const PopulerDes = () => {
  const items = [
    {
      id: 1,
      name: "Europe",
      country: "Spain",
      image: "/pop/packages-01.jpg",
      cost: 2400,
    },
    {
      id: 1,
      name: "Europe",
      country: "Australia",
      image: "/pop/packages-02.jpg",
      cost: 2400,
    },
    {
      id: 1,
      name: "Europe",
      country: "Egypt",
      image: "/pop/packages-03.jpg",
      cost: 2400,
    },
  ];

  return (
    <div className="min-h-screen w-full py-28">
      <div className="flex flex-col items-center justify-center ">
        <div className="py-1 px-8 bg-red-200 text-lg text-red-600 uppercase rounded-full">
          popular destinations
        </div>
        <div className="py-1 px-8 font-Roboto mt-5 text-4xl tracking-wider font-bold">
          Handpicked Packages
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer h-[550px]    "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full rounded-[23%]  object-cover"
              />
              <div className="absolute -bottom-36 z-20 left-1/2 -translate-x-1/2 flex justify-center items-center flex-col  rounded-full h-56 w-56 bg-white ">
              <img src="/pop/star.jpg " alt="" className="mix-blend-multiply h-10" />
                <p className="text-red-600 bg-red-200 py-1 mt-6 rounded-full px-5 text-lg">
                  {item.name}
                </p>
                <h3 className="text-2xl mt-2 font-bold font-Roboto">{item.country}</h3>
                <p className="text-gray-600 font-semibold mt-1 text-lg">
                  from: ${item.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopulerDes;
