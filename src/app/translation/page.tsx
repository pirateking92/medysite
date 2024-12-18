import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TranslationPage() {
  return (
    <>
      <div className=" flex flex-col justify-start pt-20 items-start h-screen w-full bg-[url(/chatBubble.png)] bg-no-repeat bg-cover">
        {" "}
        <h1 className="text-7xl text-left m-5">Translations</h1>
        <h2 className="text-2xl text-left m-5">
          Welcome to our translation services
        </h2>
      </div>
      <div>
        <div className="flex mb-4 justify-center items-center text-center">
          <div className="text-2xl w-1/3  ">test</div>
          <div className="w-1/3  ">words and stuff</div>
          <div className="w-1/3  ">Image will go here</div>
          {/* <Image /> */}
        </div>
        <div className="flex mb-4 justify-center items-center text-center">
          <div className="text-2xl w-1/3  ">test</div>
          <div className="w-1/3  ">words and stuff</div>
          <div className="w-1/3  ">Image will go here</div>
          {/* <Image /> */}
        </div>
        <div className="flex mb-4 justify-center items-center text-center">
          <div className="text-2xl w-1/3  ">test</div>
          <div className="w-1/3 ">
            lots of wordslots of wordslots of wordslots of wordslots of
            wordslots of wordslots of wordslots of wordslots of wordslots of
            wordslots of wordslots of wordslots of words
          </div>
          <div className="w-1/3  ">Image will go here</div>
          {/* <Image /> */}
        </div>
        <div className="flex mb-4 justify-center items-center text-center">
          <div className="text-2xl w-1/3  ">test</div>
          <div className="w-1/3  ">words and stuff</div>
          <div className="w-1/3  ">Image will go here</div>
          {/* <Image /> */}
        </div>
      </div>
    </>
  );
}
