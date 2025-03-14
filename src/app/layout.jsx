import localFont from "next/font/local";
import "./globals.css";


const geistMain = localFont({
  src: "./fonts/PlayfairDisplay.ttf",
  variable: "--font-geist-main",
  weight: "100 900",
});

export const metadata = {
  title: "Ремонт часов на „Алексеевской“",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMain.variable}`}>
        {children}
      </body>
    </html>
  );
}
