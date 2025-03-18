import GetCats from "./components/get-cats";
import GetCatsServer from "./components/get-cats-server";

export default function Home() {
  return (
    <main>
      <h1>Hey API Client Poc</h1>

      {/* <GetCats /> */}
      <GetCatsServer />
    </main>
  );
} 
