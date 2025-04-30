import { LinksIcons } from "./header";

// import { databases } from "../api/latest-posts/route";

export default function Footer() {

  // function giveEmail(email){
  //   const DATABASE_ID = "globalsevendb"
  //   const COLLECTION_ID = "users"

  //   databases.createDocument(DATABASE_ID,COLLECTION_ID,"unique()",{"email":email})
  // }

  return (
    <footer className="bg-[#172A47] space-y-8 text-white flex flex-col items-center text-lg font-bold p-6 w-full">
        
        <div className="bg-[#172A47] space-y-8 text-white flex flex-col items-center text-lg font-bold p-6 w-full max-w-2xl">
          <p>Subscribe to Our Newsletter</p>

        <div className="flex flex-col items-center w-full gap-3">
        <input className="text-lg border-b w-full border-0  h-11 pl-2" type="email" placeholder="Enter your email here"/>
        <button className="w-full h-11 font-normal bg-[#2A53C1]" type="button" >Subscribe</button>
        </div>

        <div className="flex flex-col items-center gap-4">
        {LinksIcons}
        <p className="font-normal text-sm opacity-70">2025 Powered and Secured by GlobalSeven</p>
        </div>

        </div>
       </footer>
  );
}