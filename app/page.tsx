import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Url } from "@/lib/constants";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="w-full flex flex-col justify-center items-center py-32">
        <div className="text-center">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">Bill Splitting Made Simple & Accurate. Start <span className="text-primary">Ambagan!</span></h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
              Easily and fairly divide costs with friends and family, from dinner tabs to shared expenses. Ambagan makes splitting bills simple and stress-free.
            </p>
          </div>
          <Button asChild size="lg" className="mt-10 font-bold">
            <Link href={Url.getStarted}>Split your first bill</Link>
          </Button>
        </div>
      </section>
    </>

    // Bill Splitting Made Simple & Accurate. Start Ambagan!
    // Easily and fairly divide costs with friends and family, from dinner tabs to shared expenses. Ambagan makes splitting bills simple and stress-free.
  );
}
