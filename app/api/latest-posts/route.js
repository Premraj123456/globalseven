
import { NextResponse } from "next/server";
import { Client, Databases, Query } from "appwrite";
import { getFileFromTelegram } from "../post/route";

const client = new Client()
export const databases = new Databases(client)

client
.setEndpoint("https://fra.cloud.appwrite.io/v1")
.setProject("globalseven")


const DATABASE_ID = "globalsevendb"
const COLLECTION_ID = "posts"


export async function GET() {
    const documents = await databases.listDocuments(DATABASE_ID,COLLECTION_ID, [
        Query.limit(15)
    ])
    // console.log(documents.documents)
   
    const all_posts_data = await Promise.all(
        documents.documents.map(async (data) => {
        const telegram_data_id = data.telegram_data_id
        // console.log(telegram_data_id)
        const postData = await getFileFromTelegram(telegram_data_id)
        // console.log(postData)
        return postData
    } ))

    // First group posts by category
    const grouped = {};

    all_posts_data.forEach(post => {
    const category = post.category_name;
    if (!grouped[category]) {
        grouped[category] = [];
    }
    grouped[category].push(post);
    });

    // Now transform grouped object into the array you want
    const categorized_posts = Object.keys(grouped).map(categoryName => ({
    category_name: categoryName,
    posts: grouped[categoryName]
    }));

    // console.log(categorized_posts);

        
    // console.log(categorized_posts);
    
    // console.log(all_posts_data)
    return NextResponse.json(categorized_posts)
}