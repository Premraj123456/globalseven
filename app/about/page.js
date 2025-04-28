

import Image from "next/image";
import PageTitleCard from "../components/pageTitleCard";
import { blue_color } from "../utils";
import { Instagram, Linkedin, Twitter, X, XCircle } from "lucide-react";


export default function About() {
  return (
    <>
    <PageTitleCard title="About Us" description="GlobalSeven delivers daily updates on tech, sports, gaming, and film. Stay informed with quality news when and where you want it." />
    <main className="px-5">
      
    <p className="font-[ProximaNova] pb-8 ">
    Welcome to GlobalSeven, your go-to source for comprehensive and engaging news coverage across a range of exciting categories. At GlobalSeven, we are dedicated to bringing you the latest updates and in-depth stories on technology, sports, gaming, and film. Our mission is to provide high-quality news that keeps you informed and connected to the world’s most relevant events.
<br /> <br />
Founded by our visionary CEO, Prem Raj Paul, GlobalSeven is designed to cater to the diverse interests of our readers. Whether you’re a tech enthusiast, a sports fan, a gamer, or a film aficionado, we offer a wealth of content tailored to your passions. Our team of experienced journalists and editors work tirelessly to ensure that you receive timely, accurate, and engaging news from these dynamic fields.
<br /> <br />
At GlobalSeven, we believe in delivering news that matters to you, wherever and whenever you need it. We strive to keep you updated with the latest trends, developments, and insights, making us your trusted companion in navigating the fast-paced world of news.
<br /> <br />
Join us on this exciting journey as we continue to explore, report, and connect you with the stories that shape our world.
    </p>

    <p className={`text-[${blue_color}] font-bold text-2xl`}> Me</p>

    <Image className="py-5" src={"/prem.jpg"} height={200} width={200} />
    <p className={`text-[${blue_color}] font-bold text-xl`}> Founder & Website Manager</p>
    
    <div className="space-y-4 mt-2 ">

      <div className="space-y-1">
      <p className="font-[ProximaNova]"> Prem Raj Paul</p>
      <p className="font-[ProximaNova]"> premrajpaul9@gmail.com</p>
      <p className="font-[ProximaNova]"> +917036024586</p>
      </div>

    <span className="flex gap-3">
      <a href="https://instagram.com/premrajpaul1/"><Instagram size={21}/></a>
      <a href="https://linkedin.com/premrajpaul1/"><Linkedin  size={21}/></a>
    </span>

    </div>


    <Image className="py-5" src={"/logo.jpg"} height={200} width={200} />
    <p className={`text-[${blue_color}] font-bold text-xl`}> GlobalSeven | Logo</p>
    

    <div className="space-y-4 mt-2 mb-8">

      <div className="space-y-1">
      <p className="font-[ProximaNova]">Founded on 07-08-2024</p>
      <p className="font-[ProximaNova]">agapeloveapps@gmail.com</p>
      <p className="font-[ProximaNova]">Above Email is for Brand Collaboration and more.</p>
      </div>

    </div>
  

    </main>

    </>
  );
}