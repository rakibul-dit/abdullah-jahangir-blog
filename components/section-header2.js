import Link from "next/link";

export default function SectionHeader({ title, link }) {
  return (
    <h1 className="title-r title-2">
      <span>{title}</span>
      <div className="title-link">
        <Link href={link} prefetch={false}>
          <a>আরও দেখুন</a>
        </Link>
      </div>
    </h1>
  );
}
