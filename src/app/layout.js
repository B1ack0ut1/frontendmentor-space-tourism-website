import "./globals.css";

export const metadata = {
  title: "Space Tourism",
  description: "A Tour of Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
