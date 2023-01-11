import Link from "next/link";
import Image from "next/image";

export default function PostCard({
  post: {
    postSlug = "/",
    imageSrc = "",
    catURL = "/",
    catText = "",
    postTitle = "",
    postExcerpt = "",
    postDate = "",
  },
} = {}) {
  return (
    <div className="card card-r pc-6">
      <div className="card-image">
        <Link href={`/tafseer/${postSlug}`}>
          <a className="image-r">
            <Image
              src={imageSrc}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              loading="eager"
            />
          </a>
        </Link>
      </div>

      <div className="card-content">
        <Link href={catURL}>
          <a className="cat-r">{catText}</a>
        </Link>

        <Link href={`/tafseer/${postSlug}`}>
          <a className="heading-r">{postTitle}</a>
        </Link>

        <p>{postExcerpt}</p>

        <span className="date-r">{postDate}</span>
      </div>
    </div>
  );
}
