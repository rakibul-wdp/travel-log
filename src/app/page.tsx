import TravelLogMap from "@/components/TravelLogMap";
import { TravelLogs } from "@/models/TravelLog/TravelLogs";
import Link from "next/link";

export default async function Home() {
  const logs = await TravelLogs.find().toArray();

  return (
    <main className="w-full h-full">
      <TravelLogMap logs={logs} />
      <div className="fixed top-2 right-2 z-[999]">
        <Link href="/add" className="btn btn-info">
          Add Travel Log
        </Link>
      </div>
    </main>
  );
}
