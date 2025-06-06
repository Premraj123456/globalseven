import PageTitleCard from "../components/pageTitleCard";


export default function Advertise() {
  return (
    <main className="mx-auto max-w-2xl">
    <PageTitleCard title="Advertise with Us" description="Are you interested in reaching a wide audience? Advertise with us to promote your products and services to our engaged readers." />
    <section  className="px-5 mb-8">
      <p className="font-[ProximaNova] text-lg">This site is dedicated to delivering daily news covering a wide range of topics including tech, sports, gaming, and filmy news. We provide a platform for you to connect with your target audience through effective advertising. Share your brand's story and engage with our readers through our advertising options.
      If you would like to explore advertising opportunities with us, please contact us at <span className="font-bold text-blue-800">agapeloveapps@gmail.com</span>.</p>
    </section>
    </main>
  );
}