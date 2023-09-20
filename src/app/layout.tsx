import "public/assets/css/main.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Drag & Drop | 40",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}