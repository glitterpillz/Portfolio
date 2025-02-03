import { Geist, Geist_Mono } from "next/font/google";
import { Chilanka, Anta, Cookie, Autour_One, Numans, Zen_Dots } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chilanka = Chilanka({
  weight: '400',
  variable: "--font-chilanka",
  subsets: ["latin"]
})

const anta = Anta({
  weight: '400',
  variable: "--font-anta",
  subsets: ["latin"]
})

const cookie = Cookie({
  weight: '400',
  variable: '--font-cookie',
  subsets: ['latin']
})

const autourOne = Autour_One({
  weight: '400',
  variable: "--font-autour-one",
  subsets: ['latin']
})

const numans = Numans({
  weight: '400',
  variable: "--font-numans",
  subsets: ['latin']
})

const zenDots = Zen_Dots({
  weight: '400',
  variable: "--font-zen-dots",
  subsets: ['latin']
})

export const metadata = {
  title: "Karen's Portfolio",
  description: "Explore my projects and skills as a Full Stack Software Engineer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:title" content="Karen Hickey's Portfolio" />
        <meta property="og:description" content="Explore my projects and skills as a Full Stack Software Engineer!" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${chilanka.variable} 
          ${anta.variable} 
          ${cookie.variable} 
          ${autourOne.variable} 
          ${numans.variable} 
          ${zenDots.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
