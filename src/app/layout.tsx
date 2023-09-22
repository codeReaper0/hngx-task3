import {Metadata} from "next";
import "public/assets/css/main.css";
export const metadata: Metadata = {
  title: "Drag and Drop | codeReaper",
  description: "Payflex app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
