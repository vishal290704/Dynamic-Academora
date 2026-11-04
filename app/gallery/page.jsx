import PageHero from "@/components/page-hero";
import GalleryClient from "@/components/gallery-client";
import { images } from "@/data/school";
export const metadata = { title: "Gallery | Dynamic English School", description: "A glimpse of learning, campus life, and everyday moments at Dynamic English School." };
export default function Gallery() { return <><PageHero title="A glimpse of school life." intro="A placeholder collection for now — a visual home ready for the real moments that make Dynamic English School special." image={images.activity} /><section className="section gallery-section"><div className="container"><GalleryClient /></div></section></>; }
