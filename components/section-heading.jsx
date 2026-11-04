export default function SectionHeading({ eyebrow, title, text, align = "" }) {
  return <div className={`section-heading ${align}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
