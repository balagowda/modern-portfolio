import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balachandregowda | Java Developer & System Engineer",
  description:
    "Bytes by Bala – Portfolio of Balachandregowda, Java & Spring Boot developer, AWS certified, sharing projects, blogs, and tech insights.",
  keywords: [
    "Bytes by Bala",
    "Balachandregowda",
    "bytesbybala",
    "Balachandra",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "System Engineer",
    "AWS Certified",
    "Programming",
    "Software Development",
    "Tech Projects",
    "AWS",
    "Portfolio",
  ],
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: "Balachandregowda" }],
  metadataBase: new URL("https://www.bytesbybala.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}