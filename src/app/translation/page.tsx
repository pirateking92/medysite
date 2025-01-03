import SmokeFadeIn from "@/components/SmokeFadeIn";
import Image from "next/image";

export default function TranslationPage() {
  return (
    <SmokeFadeIn visibleOnLoad={false}>
      <>
        <div className="flex flex-col justify-start pt-12 sm:pt-32 items-start h-[66vh] bg-[url(/chatBubble.png)] bg-no-repeat bg-cover">
          <h1 className="text-5xl sm:text-7xl text-left m-5">Translations</h1>
          <h2 className="text-2xl text-left m-5">
            Welcome to our translation services
          </h2>
        </div>
        <div className="m-10">
          <div className="flex mb-4 justify-center items-center  text-left">
            <div className="text-2xl w-1/3  ">test</div>
            <div className="w-1/3 ">words and stuff</div>
            <Image
              src={"/translating.avif"}
              width={200}
              height={200}
              alt={"currently a placeholder of letters"}
            />
          </div>
          <div className="flex mb-4 justify-center items-center  text-left">
            <div className="text-2xl w-1/3  ">test</div>
            <div className="w-1/3  ">words and stuff</div>
            <Image
              src={"/translating.avif"}
              width={200}
              height={200}
              alt={"currently a placeholder of letters"}
            />
          </div>
          <div className="flex mb-4 justify-center items-center  text-left">
            <div className="text-2xl w-1/3  ">test</div>
            <div className="w-1/3 ">
              lots of wordslots of wordslots of wordslots of wordslots of
              wordslots of wordslots of wordslots of wordslots of wordslots of
              wordslots of wordslots of wordslots of words
            </div>
            <Image
              src={"/translating.avif"}
              width={200}
              height={200}
              alt={"currently a placeholder of letters"}
            />
            {/* <Image /> */}
          </div>
          <div className="flex mb-4 justify-center items-center  text-left">
            <div className="text-2xl w-1/3  ">test</div>
            <div className="w-1/3  ">words and stuff</div>
            <Image
              src={"/translating.avif"}
              width={200}
              height={200}
              alt={"currently a placeholder of letters"}
            />
          </div>
        </div>
      </>
    </SmokeFadeIn>
  );
}
