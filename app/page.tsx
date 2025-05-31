import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Url } from "@/lib/constants";
import Link from "next/link";
import { FaCalculator } from "react-icons/fa";

export default function Page() {
  return (
    <div className="max-w-[2400px] mx-auto">
      <Navbar />

      <section className="relative w-full flex flex-col justify-center items-center p-5 lg:p-0 py-32 lg:min-h-screen">
        <div className="text-start lg:text-center">
          <div className="mx-auto flex max-w-5xl flex-col gap-6">
            <h1 className="text-5xl font-extrabold lg:text-6xl">Bill Splitting Made Simple & Accurate. Start <span className="text-primary">Ambagan!</span></h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
              Easily and fairly divide costs with friends and family, from dinner tabs to shared expenses. Ambagan makes splitting bills simple and stress-free.
            </p>
          </div>
          <Button asChild size="lg" className="mt-10 font-bold">
            <Link href={Url.getStarted}>Split your first bill</Link>
          </Button>
        </div>
      </section>


      <div className="flex flex-col lg:flex-row items-center p-5 gap-10 py-16 md:px-[5rem] md:py-16 md:gap-5 2xl:px-[20rem] 2xl:py-32 2xl:gap-32">

        <div className="flex flex-col flex-1 gap-2">
          <h2 className="text-3xl lg:text-5xl font-bold">Splitting expenses shouldn&apos;t be this hard.</h2>
          <p>Confusing group chats, manual spreadsheets, and chasing people for payments — we’ve all been there. Ambagan was built to take the awkwardness and hassle out of shared expenses. Whether it’s dinner, a trip, or a shared bill, we make splitting fair and frictionless.</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg items-center justify-center p-4 flex bg-border/50 text-primary h-fit w-fit">
                  <FaCalculator />
                </div>
                <CardTitle>Add expenses in seconds</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              Log who paid, who it&apos;s for, and how much — no messy spreadsheets.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg items-center justify-center p-4 flex bg-border/50 text-primary h-fit w-fit">
                  <FaCalculator />
                </div>
                <CardTitle>Fair calculations, every time</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              Ambagan automatically calculates what each person owes — accurately and transparently.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg items-center justify-center p-4 flex bg-border/50 text-primary h-fit w-fit">
                  <FaCalculator />
                </div>
                <CardTitle>Easy group management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              Create shared groups for recurring activities like housemates or travel crews.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg items-center justify-center p-4 flex bg-border/50 text-primary h-fit w-fit">
                  <FaCalculator />
                </div>
                <CardTitle>Access anywhere</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              Use Ambagan from any device — desktop or mobile — right in your browser.
            </CardContent>
          </Card>

        </div>


      </div>

      <div className="flex flex-col items-center p-5 gap-10 py-16 md:px-[5rem] md:py-16 md:gap-5 2xl:px-[20rem] 2xl:py-32 2xl:gap-32">

        <div className="flex flex-col flex-1 gap-2">
          <h2 className="text-3xl lg:text-5xl font-bold">How Ambagan Makes Bill Splitting Effortless</h2>
          <h3 className="font-medium">No complicated setup. No learning curve. Just three simple steps to get started.</h3>
          <p>Ambagan was built to be intuitive and quick — so you can spend less time managing expenses and more time enjoying the moment. Whether it's a one-time hangout or a recurring setup, here’s how easy it is to use:</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10">
          <div className="flex flex-col gap-2 group">
            <div className="flex items-center gap-1">
              <div className="relative w-fit">
                <h3 className="!text-[110px] !font-inter font-extrabold bg-gradient-to-b from-[#22c55e] to-white text-transparent bg-clip-text leading-none">01</h3>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"></div>
              </div>
              <svg className="w-full h-auto hidden lg:block group-last:hidden" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <line x1="0" y1="25" x2="180" y2="25" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4"></line>
                <circle cx="190" cy="25" r="5" fill="#22c55e"></circle>
              </svg>
            </div>
            <div className="flex flex-col gap-[.5rem] prose">
              <h3 className="font-bold">Create a Group</h3>
              <p>Start by setting up a new group for your event, trip, or household. Invite your friends so everyone can stay on the same page.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <div className="flex items-center gap-1">
              <div className="relative w-fit">
                <h3 className="!text-[110px] !font-inter font-extrabold bg-gradient-to-b from-[#22c55e] to-white text-transparent bg-clip-text leading-none">02</h3>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"></div>
              </div>
              <svg className="w-full h-auto hidden lg:block group-last:hidden" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <line x1="0" y1="25" x2="180" y2="25" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4"></line>
                <circle cx="190" cy="25" r="5" fill="#22c55e"></circle>
              </svg>
            </div>
            <div className="flex flex-col gap-[.5rem] prose">
              <h3 className="font-bold">Add Shared Expenses</h3>
              <p>Log each expense as it happens — who paid, how much, and for whom. Ambagan keeps things organized and automatically handles the math.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <div className="flex items-center gap-1">
              <div className="relative w-fit">
                <h3 className="!text-[110px] !font-inter font-extrabold bg-gradient-to-b from-[#22c55e] to-white text-transparent bg-clip-text leading-none">03</h3>
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"></div>
              </div>
              <svg className="w-full h-auto hidden lg:block group-last:hidden" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <line x1="0" y1="25" x2="180" y2="25" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4"></line>
                <circle cx="190" cy="25" r="5" fill="#22c55e"></circle>
              </svg>
            </div>
            <div className="flex flex-col gap-[.5rem] prose">
              <h3 className="font-bold">View Fair Splits & Settle Up</h3>
              <p>Get a clear breakdown of who owes what. Everyone sees their share, and you can easily track what’s paid and what’s pending.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col lg:flex-row items-center p-5 gap-10 py-16 md:px-[5rem] md:py-16 md:gap-5 2xl:px-[20rem] 2xl:py-32 2xl:gap-32">

        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <h2 className="text-3xl lg:text-5xl font-bold">Real-Life Ways Ambagan Makes Splitting Expenses Effortless.</h2>
          <p>From casual dinners to big group adventures, Ambagan handles all the little expenses that add up. No matter the situation, you can split costs quickly, clearly, and without the awkward follow-ups.</p>
        </div>

        <div className="hidden w-1/2 md:flex items-center justify-center relative">
          <div className="flex flex-wrap gap-3 max-w-full items-center justify-center ">
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🍽️ Dinner</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎮 Game Night</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎂 Birthday Gift</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎟️ Concert</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🍿 Movie Night</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">💼 Office Lunch</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎁 Group Gift</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">📺 Streaming</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🏨 Hotel Stay</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎨 Art Supplies</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🏠 Utilities</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🛒 Groceries</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">📱 Phone Plan</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🎭 Events</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🚗 Car Share</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">✈️ Vacation</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">⛺ Camping</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🏋️ Gym Membership</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🚕 Transport</Badge>
            <Badge variant={'outline'} className="bg-white h-fit z-10 py-2 px-3">🍳 BBQ Party</Badge>
          </div>

        </div>
      </div>


    </div>
  );
}
