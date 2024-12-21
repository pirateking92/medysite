import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div>
      <main>
        <div className="min-h-[80vh] bg-[url(/phoneCall.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center ">
          <Card
            className="mx-5 sm:mx-auto w-full max-w-xl 
             m-5
             shadow-lg
             border
             border-gray-200
             rounded-lg
             overflow-hidden"
          >
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>Lets have a lovely talk about stuff!</CardContent>
            <CardFooter>It will be great!</CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
