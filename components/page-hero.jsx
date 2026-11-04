import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { images } from "@/data/school";
export default function PageHero({ eyebrow = "Dynamic English School", title, intro, image = images.campus, cta }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={14} /><span>{title}</span></div><div className="page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{intro && <p className="page-hero-intro">{intro}</p>}{cta && <Link className="button button-dark" href={cta.href}>{cta.label}<ArrowUpRight size={17} /></Link>}</div><div className="page-hero-image"><Image src={image} alt="" fill sizes="(max-width: 800px) 100vw, 48vw" /></div></div></div></section>;
}
