import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BearState {
  page: "home" | "apple" | "spotify";
  pushPage: (location: "home" | "apple" | "spotify") => void; // on click
  preview: "home" | "apple" | "spotify";
  previewPage: (location: "home" | "apple" | "spotify") => void; // on hover
}

const useStore = create<BearState>()(
  // persist(
  (set) => ({
    page: "home",
    pushPage: (page) => set((_) => ({ page })),
    preview: "home",
    previewPage: (preview) => set((_) => ({ preview })),
  })
  //   {
  //     name: "catalogist-storage",
  //   }
  // )
);

export { useStore };
