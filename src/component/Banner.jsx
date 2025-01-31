import React, { useEffect, useState } from "react";

const BannerPoster = [
  {
    backdrop_path: "/oPUOpnl3pqD8wuidjfUn17mO1yA.jpg",
    title: "Transformers One",
  },
  {
    backdrop_path: "/iAflChQCzezzqPn0KjwX7GtG74m.jpg",
    title: "Family Pack",
  },
  {
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    title: "Venom: The Last Dance",
  },
  {
    backdrop_path: "/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg",
    title: "Classified",
  },
  {
    backdrop_path: "/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg",
    title: "Ten Lives",
  },

  {
    backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    title: "Deadpool and Wolverine",
  },
  {
    backdrop_path: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    title: "Align: Romulus",
  },
  {
    backdrop_path: "/fNylhsI3u6NmTxeanFPDEwvT9GS.jpg",
    title: "Women of the Hour",
  },

  {
    backdrop_path: "/cVg97LOJgrDZJ7bVmjU2KsGRYnU.jpg",
    title: "Smile 2",
  },
  {
    backdrop_path: "/wFn1yJnuMOh8M3EonYchPH5XyjC.jpg",
    title: "Terrifier 3",
  },
];


function Banner() {

  const [index , setIndex] = useState(0)

  useEffect(()=>{
    let idx = Math.floor(Math.random() * 10)
    setIndex(idx)
  } , [])
  const idx=Math.floor(Math.random() * 10)
  return (
    <div
      className=" h-[90vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${BannerPoster[index].backdrop_path})`,
      }}
    >
      <div className="text-white w-full text-center" >
        {BannerPoster[index].title}
      </div>
    </div>
  );
}

export default Banner;
