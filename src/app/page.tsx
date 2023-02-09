import { TravelLogs } from "@/models/TravelLog/TravelLogs";

export default async function Home() {
  const logs = await TravelLogs.find().toArray();

  return (
    <main>
      <h1>Hello World...!!!</h1>
      <h2>{logs.length}</h2>
      {logs.map((log) => (
        <div>{log.title}</div>
      ))}
    </main>
  );
}
