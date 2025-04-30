import { NextResponse } from "next/server";
import { Client, Databases, Query } from "appwrite";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("globalseven");

const DATABASE_ID = "globalsevendb";
const COLLECTION_ID = "posts";

const bot_token = "7493458054:AAErX9Y_MWW-bVX7auEEXdvqDQv6PvPdijc"; // Your Telegram Bot Token
// const document_unique_id = 'your_document_unique_id'; // The file_unique_id from previous upload

const axios = require("axios");
const fs = require("fs");

// const document_unique_id = 'your_document_unique_id'; // The file_unique_id from previous upload

export async function getFileFromTelegram(document_unique_id) {
  try {
    // Step 1: Get file information from Telegram using 'getFile' method
    const fileInfoResponse = await fetch(
      `https://api.telegram.org/bot${bot_token}/getFile?file_id=${document_unique_id}`
    );

    const file_info_json = await fileInfoResponse.json();
    // console.log(file_info_json)
    const file_path = file_info_json["result"]["file_path"];

    const file_url = `https://api.telegram.org/file/bot${bot_token}/${file_path}`;

    // const fileInfo = fileInfoResponse.data;
    // if (!fileInfo.ok) {
    //     throw new Error('Failed to get file info from Telegram');
    // }

    // Step 2: Get the file path from the response
    // const filePath = fileInfo.result.file_path;
    // const fileUrl = `https://api.telegram.org/file/bot${bot_token}/${filePath}`;

    // Step 3: Download the file from the Telegram server
    const fileResponse = await axios.get(file_url, {
      responseType: "arraybuffer", // To download the file as binary
    });

    // Step 4: Save the file locally (optional, for inspection)
    // fs.writeFileSync('downloaded_data.json', fileResponse.data);

    // Step 5: Parse the JSON content (Assume it's a JSON file)
    const jsonData = JSON.parse(fileResponse.data.toString());
    // console.log('Retrieved JSON Data:', jsonData); ---
    return jsonData;
  } catch (error) {
    console.error("Error retrieving file from Telegram:", error);
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  // console.log(id)

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const document_data = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("post_id", id)]
    );
    // console.log(document_data)
    if (document_data.documents.length === 0) {
      return NextResponse({ error: "No document Found" }, { status: 404 });
    }

    const telegram_data_id = document_data.documents[0].telegram_data_id;
    const doc = document_data.documents[0];
    // console.log(doc)
    const createdAt = doc["$createdAt"] || doc.timestamp || doc.time; // adjust this
    // console.log(createdAt)
    const now = dayjs();
    const postTime = dayjs(createdAt);

    // If less than 3 days ago, show relative; otherwise show full date
    const displayTime = now.diff(postTime, 'day') < 3
    ? postTime.fromNow()               // e.g., "5 hours ago"
    : postTime.format('MMMM D, YYYY'); // e.g., "April 29, 2025"

    // console.log(displayTime)
    const postData = await getFileFromTelegram(telegram_data_id);
   
    return NextResponse.json({ ...postData, time: displayTime });
    // return NextResponse.json({...postData })

    // return NextResponse.json({ success : "ok", telegram_data_id: telegram_data_id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internel Error" }, { error: 500 });
  }
}
