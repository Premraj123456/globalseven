
// import { getAllPosts } from '@/lib/appwrite'; // or wherever you keep the function


import { Client, Databases, Query } from "appwrite";
import { NextResponse } from "next/server";
const client = new Client()
const databases = new Databases(client)


client
.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("globalseven")


const DATABASE_ID = "globalsevendb"
const COLLECTION_ID = "posts"


async function getAllPosts() {
  let allPosts = [];
  let lastId = null;
  const limit = 100; // Max per Appwrite request

  while (true) {
    const queries = [Query.limit(limit)];
    if (lastId) {
      queries.push(Query.cursorAfter(lastId));
    }

    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries);
    allPosts = allPosts.concat(response.documents);

    if (response.documents.length < limit) {
      break; // No more documents
    }

    lastId = response.documents[response.documents.length - 1].$id;
  }

  return allPosts;
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

  // console.log(posts)

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

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
