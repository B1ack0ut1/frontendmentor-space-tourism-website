import "./globals.css";
import { bellefair } from "./fonts";

export const metadata = {
  title: "Space Tourism",
  description: "A Tour of Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bellefair.className}>{children}</body>
    </html>
  );
}
