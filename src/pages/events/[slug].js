// import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { API_URL } from "@/config/index";

import styles from "@/styles/Lesung.module.css";

export default function LesungPage({ lesung }) {
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <div className={styles.pricetag}>
            <span>Eintritt: € 10,– / ermäßigt € 6,–</span>
          </div>
        </div>
        <span>
          Do {new Date(lesung.date).toLocaleDateString("de-DE")} um{" "}
          {lesung.time}
        </span>
        <h1>{lesung.performers}</h1>
        <h2>{`»${lesung.name}«`}</h2>
        {lesung.image && (
          <div className={styles.image}>
            <Image
              src={lesung.image.formats.thumbnail.url}
              width={393}
              height={300}
            />
          </div>
        )}
        <p>{lesung.description01}</p>
        {`${"/ / / "}`}
        <p>{lesung.description02}</p>
        <h2>Ort: {lesung.venue}</h2>
        <p>{lesung.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((lesung) => ({
    params: { slug: lesung.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      lesung: events[0],
    },
    revalidate: 1,
  };
}

