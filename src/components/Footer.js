import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <h3>Veranstalter</h3>
          <p>GretherKultur in Zusammenarbeit mit der Buchhandlung jos fritz.</p>
          <p>www.grether.syndikat.org</p>
        </div>
        <div>
          <h3>Veranstaltungsort</h3>
          <p>Kleiner Grether Innenhof</p>
          <p>Adlerstraße 12a · neben dem Neubau … Zugang Faulerstraße 14</p>
          <p>79098 Freiburg</p>
        </div>
        <div>
          <h3>Vorverkauf</h3>
          <p>Buchhandlung jos fritz</p>
          <p>Wilhelmstraße 15</p>
          <p>79098 Freiburg</p>
          <p>
            {"// "}Telefon: 0761{" · "} 26877
          </p>
          <p>
            {"// "}Mail{": "}vorverkauf@josfritz.de
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <Link href="/impressum">
          <a className={styles.impressumlink}>Impressum {"|"} Datenschutz</a>
        </Link>
      </div>
    </footer>
  );
}
