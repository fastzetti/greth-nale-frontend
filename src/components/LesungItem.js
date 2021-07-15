import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function LesungItem({ lesung }) {
  return (
    <div className={styles.event}>
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
        <span>
          Do {new Date(lesung.date).toLocaleDateString("de-DE")} um{" "}
          {lesung.time}
        </span>
        <h3>{lesung.performers}</h3>
        <h2>{`»${lesung.name}«`}</h2>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${lesung.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
