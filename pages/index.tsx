import SEO from "@/seo";
import { useMedia, mobileBreakpoint } from "@/modules/useMedia";
import Underlay from "@/components/Underlay";
import Rendering from "@/components/Rendering";

export default function Home() {
  // const mobile = useMedia(mobileBreakpoint);
  return (
    <>
      <SEO />

      <main>
        <Rendering />
        <Underlay />
      </main>
    </>
  );
}
