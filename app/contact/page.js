import PageTitleCard from "../components/pageTitleCard";
import { Form } from "../utils";

export default function Contact() {
  return (
  <main className="flex flex-col justify-center  max-w-2xl mx-auto">
    <PageTitleCard title="Contact Us" description="Have a question or a news tip? We'd love to hear from you. Get in touch with us today."/>
    <section className="px-5">
      <h2 className="font-bold text-lg">Email: </h2>
      <p className="font-[ProximaNova] mb-3 text-lg">agapeloveapps@gmail.com</p>
      <h2 className="font-bold text-lg">Phone: </h2>
      <p className="font-[ProximaNova] mb-5 text-lg">+91 7036024586</p>

      {/* <h2 className="font-bold text-lg mb-4">Form: </h2> */}

      {Form}
    </section>
  </main>
  );
}