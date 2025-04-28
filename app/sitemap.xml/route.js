
// import { getAllPosts } from '@/lib/appwrite'; // or wherever you keep the function


import { Client, Databases, Query } from "appwrite";

const client = new Client()
const databases = new Databases(client)


client
.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("globalseven")


const DATABASE_ID = "globalsevendb"
const COLLECTION_ID = "posts"


async function getAllPosts() {
  const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(10000000), // <-- get up to 10k posts
  ]);
  return response.documents;
}


export async function GET() {
  const baseUrl = 'https://globalseven.in';
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/advertise',
  ];

  const posts = await getAllPosts(); // fetch from Appwrite

  console.log(posts)

  const postUrls = posts.map((post) => `
  <url>
    <loc>${baseUrl}/post/${post.post_id}</loc>
    <lastmod>${new Date(post.$updatedAt || post.$createdAt).toISOString()}</lastmod>
  </url>
`).join('');

  const staticUrls = staticPages.map((page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${postUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
