import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import Page from "./components/Page";

const DynamicMap = dynamic(() => import("./components/DynamicMap"), {
  ssr: false,
});

const Map = () => {
  useEffect(() => {
    // Load Leaflet CSS dynamically
    import("leaflet/dist/leaflet.css");
  }, []);

  return (
    <div className="root">
      <Head>
        <title>OpenStreetMap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main>
          <DynamicMap />
        </main>
      </Page>
    </div>
  );
};

export default Map;
