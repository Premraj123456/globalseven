import Image from "next/image";
import Link from "next/link";

export default function HomeCard() {
  return (
    <section className="max-w-5xl md:hidden ">
        <div className="relative ">

                <Image className=" w-full brightness-90 " src={"/city.jpg"} width={1000} height={1000} alt="city">
                    
                </Image>

                <div className="space-y-5 px-15 absolute top-1 flex items-center flex-col justify-center h-full text-center text-white text-shadow-sm text-shadow-black">
                    <h1 className="font-bold text-4xl">Quick & Easy Global News</h1>
                    <h2 className="">Stay informed on global news quickly and easily with our well-structured blog posts.</h2>
                    <a href="https://www.google.com/search?q=site%3A%2F%2Fglobalseven.in" className="bg-[#2A53C1] px-9 py-2 font-[ProximaNova]" >View All</a>
                </div>

            
            
        </div>

        <div className="bg-[#2A53C1] text-white px-5 py-3 max-w-2xl">
            <h3 className=" text-xl">Latest Updates</h3>
            <h4 className="font-[ProximaNova] font-thin">Susan Wojcicki: A YouTube CEO has passed away on AUG 09, 2024</h4>
        </div>
    </section>
  );
}