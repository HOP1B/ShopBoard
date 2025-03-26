import type { Metadata } from "next";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "ShopBoard",
  description: "The best e-commerce you will ever see!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="flex flex-col min-h-screen  "> 
        <Header />
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        <main className="flex-1">{children}</main> 
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}

