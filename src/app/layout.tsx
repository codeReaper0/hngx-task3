import "public/assets/css/main.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
