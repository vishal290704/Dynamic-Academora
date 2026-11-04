"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/school";
export default function FAQ() { const [active, setActive] = useState(null); return <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? "open" : ""}`} key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}>{question}<ChevronDown size={18} /></button>{active === index && <p>{answer}</p>}</div>)}</div>; }
