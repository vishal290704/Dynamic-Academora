import { MessageCircle, Phone } from "lucide-react";
import { school } from "@/data/school";
import { whatsappUrl } from "@/lib/whatsapp";
export default function MobileActions() {
  return <div className="mobile-actions"><a href={`tel:${school.phones[0]}`}><Phone size={17} /> Call school</a><a className="whatsapp" href={whatsappUrl("Hello Dynamic English School, I would like to enquire about the school.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp enquiry</a></div>;
}
