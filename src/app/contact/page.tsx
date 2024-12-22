import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div>
      <main>
        <div className="min-h-[60vh] bg-[url(/phoneCall.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-end ">
          <Card
            className="mx-5 w-[45%] h-[45%]
             m-5
             shadow-lg
             border
             border-gray-200
             rounded-lg
             overflow-hidden
             items-end"
          >
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              Lets have a lovely talk about stuff!
              <div></div>
            </CardContent>
            <CardFooter>It will be great!</CardFooter>
          </Card>
        </div>
        <div className="m-10">
          <Contact />
        </div>
      </main>
    </div>
  );
}
