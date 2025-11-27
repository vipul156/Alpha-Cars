import Coursel from "@/components/Coursel";
import Details from "@/components/Details";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto bg-gray-50">
      <Header />
      <main className="max-w-8xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <Coursel />
            <Details />
          </div>
        </div>
      </main>
    </div>
  );
}
