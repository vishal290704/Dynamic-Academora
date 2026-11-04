import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MobileActions from "@/components/mobile-actions";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });
export const metadata = { title: "Dynamic English School | Nurturing Young Minds Since 2009", description: "Discover Dynamic English School, Phulwariya, Varanasi. Learn about our academics, faculty, school facilities, and admission enquiries for Nursery to Class 8.", openGraph: { title: "Dynamic English School", description: "A brighter place to grow.", type: "website" } };
export default function RootLayout({ children }) { return <html lang="en"><body className={`${dmSans.variable} ${fraunces.variable}`}><SiteHeader /><main>{children}</main><SiteFooter /><MobileActions /></body></html>; }
