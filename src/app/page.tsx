import Gallery from "@/components/gallery";
import Header from "@/components/header";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Drag & Drop | codeReaper",
  description: "Drag and Drop Gallery",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Gallery />
      </main>
    </>
  );
}
