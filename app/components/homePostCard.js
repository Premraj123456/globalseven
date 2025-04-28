import Image from "next/image";
import Link from "next/link";


export default function HomePostCard({image_url, title, description ,post_id}) {
  return (
    <Link href={`/post/${post_id}`} >
    <div className="w-full space-y-4">
      <Image className="w-full mt-6" src={image_url} width={100} height={30} alt={title} />
      <h4 className="text-lg">{title}</h4>
      <p className="font-[ProximaNova] mb-6">{description}</p>
    </div>
    </Link>
  );
}