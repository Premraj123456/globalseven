import { blue_color } from "../utils";


export default function PageTitleCard({title, description}) {
  return (
    <>
      <div className={`bg-[${blue_color}] py-4 text-white pl-5 w-full max-w-2xl`}>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
    <h2 className={`px-5 font-bold text-[${blue_color}] text-2xl py-5`}>{description}</h2>
    
    </>
  );
}