import { useState } from "react";
import SEO from "@/seo";
import { useMedia, mobileBreakpoint } from "@/modules/useMedia";
import Underlay from "@/components/Underlay";
import Rendering from "@/components/Rendering";

export default function Home() {
  const mobile = useMedia(mobileBreakpoint);
  const [theme, setTheme] = useState<string | null>(null);
  return (
    <>
      <SEO />

      <main>
        <Rendering mobile={mobile} theme={theme} />
        <Underlay setTheme={setTheme} />
      </main>
    </>
  );
}
