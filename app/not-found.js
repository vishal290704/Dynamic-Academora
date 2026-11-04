import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() { return <div className="not-found"><p className="eyebrow">A little off the path</p><h1>Page not found.</h1><p>Let’s take you back to a brighter place.</p><Link className="button button-dark" href="/">Back to home <ArrowUpRight /></Link></div>; }
