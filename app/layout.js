// import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPA NEPAL",
  description: "R Pandey and Associates (RPA) nepal is a well established associate firm",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body >
        <MainLayout> {children}</MainLayout>
      </body>
    </html>
  );
}
