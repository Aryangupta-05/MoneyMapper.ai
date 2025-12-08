import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money Mapper",
  description: "Your AI Finance Manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`$'${inter.className}`}>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-blue-50 dark:bg-gray-950 py-6 transition-colors">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                <p className="font-bold font-serif colo text-2xl display-center">Made by ARYAN</p>
                <a
  href="https://aryanportfolio-theta.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 
             bg-gradient-to-r from-blue-600 to-indigo-600 
             text-white font-semibold rounded-xl shadow-lg 
             hover:shadow-xl hover:scale-[1.03] 
             transition-all duration-300 active:scale-95"
>
   View My Portfolio
</a>


              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
