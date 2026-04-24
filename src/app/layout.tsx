import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Ranjan | Senior Data Analyst & Analytics Consultant",
  description:
    "Portfolio of Abhishek Ranjan — Senior Data Analyst specializing in SQL, Python, Power BI, Tableau, and advanced market research analytics. 3+ years turning complex data into actionable business insights.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "Tableau",
    "SQL",
    "Python",
    "Market Research",
    "Analytics Consultant",
  ],
  authors: [{ name: "Abhishek Ranjan" }],
  openGraph: {
    title: "Abhishek Ranjan | Senior Data Analyst",
    description:
      "Turning complex data into actionable insights that drive business decisions and growth.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
