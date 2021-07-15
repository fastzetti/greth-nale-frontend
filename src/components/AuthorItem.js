import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/AuthorItem.module.css";

export default function AuthorItem({ lesung }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image
          src={
            lesung.image
              ? lesung.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={256}
          height={191}
        />
      </div>
      <div className={styles.info}>
        <p>{lesung.performers}</p>
      </div>

      {
        <div className={styles.link}>
          <Link href={`/events/${lesung.slug}`}>
            <a className="btn-secondary">zur Lesung</a>
          </Link>
        </div>
      }
    </div>
  );
}
