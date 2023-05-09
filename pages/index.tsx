import { useEffect, useState } from "react";
import SEO from "@/seo";
import { useStore } from "@/store";
import Underlay from "@/components/Underlay";
import Rendering from "@/components/Rendering";

export default function Home() {
  const page = useStore(
    (state: { page: "home" | "apple" | "spotify" }) => state.page
  );
  const [ready, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  return (
    <>
      <SEO />

      <main
        style={{
          background:
            page == "home"
              ? "linear-gradient(180deg, #e6eaf5 0%, #f6f6f6 80%)"
              : page == "apple"
              ? "#FB5C74" // apple music
              : "#77E39E", // spotify
        }}
      >
        {ready && <Rendering />}
        <Underlay />
      </main>
    </>
  );
}
