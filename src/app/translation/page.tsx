import Navbar from "@/components/Navbar";

export default function TranslationPage() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center h-screen">
        <div className="w-full text-left h-screen pt-40 bg-[url(/chatBubble.png)] bg-no-repeat bg-cover">
          {" "}
          <h1 className="text-7xl text-left m-5">Translations</h1>
          <h2 className="text-left m-5">Welcome to our translation services</h2>
        </div>
        <div></div>
      </main>
    </div>
  );
}
