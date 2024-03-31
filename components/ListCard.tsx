import React from "react";
import Image from "next/image";

export interface card {
  name: string;
  img: string;
}

interface props {
  list: card[];
  title: string;
}
function ListCard({ list, title }: props) {
  return (
    <div className="w-full lg:w-[325px]  shadow-lg flex flex-col gap-3 h-[500px] p-8">
      <div className="font-montserrat font-bold text-xl mb-4 text-blue-300">
        {title}
      </div>
      <div className=" grid  grid-cols-2 gap-8 h-full grid-flow-row ">
        {list.map((ele) => {
          return (
            <div
              key={ele.name}
              className="flex flex-col gap-2 justify-center items-center border-1 border-solid border-green-200"
            >
              <div className="h-[50px] w-[50px] relative">
                <Image
                  src={ele.img}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                  className="object-cover"
                />
              </div>

              <article className="text-md font-montserrat font-semibold text-emerald-500">
                {ele.name}
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListCard;
