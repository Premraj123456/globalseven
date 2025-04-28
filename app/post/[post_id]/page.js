// app/posts/[post_id]/page.js
import PageTitleCard from "@/app/components/pageTitleCard";
import { Eye, Facebook, Heart, Linkedin, MessageCircle, Share, Twitter } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

// // app/posts/[post_id]/page.js
// async function fetchPostData(post_id) {
//     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Use your site's URL here
//     const url = `${baseUrl}/api/post?id=${post_id}`;
//     const response = await fetch(url);
//     const postData = await response.json();
//     return postData;
// }

export default async function Post({ params }) {
    const { post_id } = await params; // Destructure post_id from params

    const baseUrl = 'https://globalseven.in'; // Use your site's URL here
    const url = `${baseUrl}/api/post?id=${post_id}`;
    const response = await fetch(url);
    const postData = await response.json();
    const domain = "globalseven.in"

    const logichash = (object_info) => {

        if (!object_info === undefined){
            if (object_info["description"].startsWith("#")) {
                return "";
            } else {
                return object_info["description"];
            }
        }
       
    }
    

    return (
        <>
            <PageTitleCard  title="Post" />

            <main className="px-5 md:px-40 lg:px-60">
                {postData ? (
                    <>
                        {/* SEO and meta tags */}
                        <Head>
                            <title>{postData['title']} | Global Seven</title>
                            <meta name="description" content={postData['ai_content_list'][1]} />
                            <meta property="og:title" content={postData['title']} />
                            <meta property="og:description" content={postData['ai_content_list'][1]} />
                            <meta property="og:image" content={postData['image_url']} />
                            <meta property="og:url" content={`https://www.globalseven.in/post/${postData['post_id']}`} />
                            <meta name="twitter:title" content={postData['title']} />
                            <meta name="twitter:description" content={postData['ai_content_list'][1]} />
                            <meta name="twitter:image" content={postData['image_url']} />
                        </Head>

                        <article className="">
                            <h1 className="font-bold text-3xl">{postData['title']}</h1>
                            <Image alt={postData['title']} className="my-6" width={500} height={500} src={postData['image_url']} />
                            <p className="font-[ProximaNova]">
                                {postData['ai_content_list'].map((object_info, index) => {
                                    if (object_info["sub-heading"]) {
                                        return (
                                            <h2 key={index} className="font-bold text-lg py-5 font-[HelveticaCustom]">
                                                {object_info["sub-heading"]}
                                            </h2>
                                        );
                                    } else {
                                        return (
                                            <p key={index} className="py-2">
                                                {object_info["description"]}
                                            </p>
                                        );
                                    }
                                })}
                            </p>
                        </article>
                    </>
                ) : (
                    "Loading..."
                )}

                {/* Social Share and Stats */}
                <span className="flex py-5 border border-x-0 space-x-5 my-5">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.${domain}/post/${post_id}`} target="_blank" rel="noopener noreferrer"><Facebook size={21}  /></a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.${domain}/post/${post_id}`} target="_blank" rel="noopener noreferrer"><Linkedin   size={21} /></a>
                    <a href={`https://twitter.com/intent/tweet?url=https://www./${domain}/post/${post_id}&text=Check%20out%20this%20amazing%20post!`} target="_blank" rel="noopener noreferrer"> <Twitter  size={21} /></a>

                    {/* <Share target="_blank" size={21} /> */}
                    {/* <Eye className="ml-auto" size={21} /><p>657</p> */}
                    {/* <Heart className="ml-auto" size={21} /> */}
                </span>

                {/* <span className="flex pb-5 space-x-6 my-5">
                    <span className="flex space-x-2 items-center">
                        <Eye size={21} /> <p>657</p>
                    </span>
                    <span className="flex space-x-2 items-center">
                        <MessageCircle size={21} /> <p>43</p>
                    </span>
                </span> */}

                {/* Recent Posts and Comments */}
                {/* <section>
                    <h2 className="font-bold">Recent Posts</h2>
                </section> */}

                {/* <section>
                    <span className="flex py-5 border border-x-0 space-x-5 my-5">
                        <h2 className="font-bold">Comments</h2>
                    </span>
                    <span className="flex border space-x-5 my-5">
                        <input
                            className="pl-4 h-14 w-full"
                            placeholder="Write a Comment"
                            type="text"
                            name="comment"
                            id="comment"
                        />
                    </span>
                </section> */}
            </main>
        </>
    );
}
