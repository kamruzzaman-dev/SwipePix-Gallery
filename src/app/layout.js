import { Inter } from "next/font/google";
import "../styles/_index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "job task",
  description: "ollyo job task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
