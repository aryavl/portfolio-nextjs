import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading ">
        Pro
        <span className="gradient-text">jects</span>
      </h1>
      <div className="w-[80%] pt-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                src={'/images/p1.jpg'}
                alt="portfolio"
                // width={300}
                // height={300}
                layout="fill"
                className="object-contain"
                />
            </div>
        </div>
        <div>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                src={'/images/p1.jpg'}
                alt="portfolio"
                // width={300}
                // height={300}
                layout="fill"
                className="object-contain"
                />
            </div>
        </div>
        <div>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                src={'/images/p1.jpg'}
                alt="portfolio"
                // width={300}
                // height={300}
                layout="fill"
                className="object-contain"
                />
            </div>
        </div>
        <div>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                src={'/images/p1.jpg'}
                alt="portfolio"
                // width={300}
                // height={300}
                layout="fill"
                className="object-contain"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
