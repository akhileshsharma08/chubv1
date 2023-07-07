
import "./globals.css";

import { UserAuthContextProvider } from "../Context/UserAuthContextProvider";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Head from "next/head"


export const metadata = {
  title: "Connstructions hub",
  description: "constructionshub.in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <UserAuthContextProvider>
        <>
          <Navbar />
          <body >{children}</body>
          <Footer/>
        </>
      </UserAuthContextProvider>
    </html>
  );
}
