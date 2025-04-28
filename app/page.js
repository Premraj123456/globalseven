import Image from "next/image";
import HomeCard from "./components/homeCard";
import HomePostCard from "./components/homePostCard";
import next from "next";

export default async function Home() {

  const response = await fetch("http://localhost:3000/api/latest-posts", {next : {revalidate : 60}})
  const list_of_posts = await response.json()

  const map_all_posts = list_of_posts.map((category, i1) => {

    return(<li key={i1} className="space-y-3 ">
      <h3 className="text-[#2A53C1] text-xl font-bold">{category.category_name}</h3>

          <ul className="space-y-12 md:grid md:justify-center md:grid-cols-2 md:space-x-3 md:-space-y-3 lg:grid-cols-3 xl:grid-cols-3 ">
            {category.posts.map((post_data, i) => <HomePostCard post_id={post_data.post_id} key={i} title={post_data.title} image_url={post_data.image_url} description={post_data.meta_description} />)}
          </ul>
       </li>
    )
  })

  return (
    <main className="flex flex-col justify-center ">
      <HomeCard />

      <ul className="p-6 space-y-3 mx-auto max-w-6xl">
        

          {map_all_posts}
          {/* <h3 className="text-[#2A53C1] text-xl font-bold">Tech</h3>

          <ul className="space-y-12">
            <HomePostCard />
            <HomePostCard />
            <HomePostCard />
          </ul> */}

        



{/*         
        <h3>Tech</h3>
        <h3>Sports</h3>
        <h3>Business</h3>
        <h3>Politics</h3>
        <h3>Filmy</h3>
        <h3>Lifestyle</h3> */}
      </ul>
    </main>
  );
}