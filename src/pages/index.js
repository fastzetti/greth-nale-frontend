// import Layout from "@/components/Layout";
// import AuthorItem from "@/components/AuthorItem";
import Layout from "../components/Layout";
import AuthorItem from "../components/AuthorItem";
import { API_URL } from "@/config/index";

import styles from "@/styles/Home.module.css";

export default function GretherNachtLesePage({ events }) {
  return (
    <Layout>
      <h1>Grether Nach(t)lese 2021</h1>
      <p>
        <span>Zum 15. Mal</span> Grether Nach(t)lese, zum 15. Mal Autor*innen
        aus der Region unter nächtlichem Himmel und der Silhouette des Grether
        Kamins. Zum Glück ist die veranstaltungsfreie Zeit gerade zu Ende
        gegangen. Zum Glück kann die <span>Nacht(t)lese</span> stattfinden und
        diesmal begleitet uns <span>Musik bei allen Lesungen.</span>
      </p>
      <p>
        {" "}
        Die Interaktion von Literatur und Musik hat uns einige der schönsten
        Nach(t)lesen beschert. Unvergesslich u.a. die Lesung von Iris Wolff, die
        Vertonung von Kracauers Romans »Ginster«, die Interpretation der
        Ursonate oder das Hörbuch-Live »Bleiben ist keines, nirgendwo«.
      </p>
      <p>
        {" "}
        Wir freuen uns auf <span>Buki</span>, der die Lesung von{" "}
        <span>Julia Heinecke</span> mit ein paar Liedern aus der Bewegung gegen
        das KKW Wyhl begleitet, wir sind gespannt welche Songs{" "}
        <span>Jess Jochimsen</span> zur Vermissung der Welt einfallen und wir
        freuen uns auf ein{" "}
        <span>Wort- und Tonspektakel beim »letzten Ritt«.</span> Schön, dass die
        Pandemie rechtzeitig die Flucht ergriffen hat. Hoffen wir darauf, dass
        wir sie bald endgültig los sind. Die mehrmonatige Abstinenz, was Kino
        und Theater, Lesungen und Veranstaltungen oder Konzerte und Feste
        angeht, hat deutlich gemacht, wie sehr die Kultur das Leben bereichert.
        Auch in diesem Sinne freuen wir uns auf die Lesung hoffen auf großes
        Interesse und auf möglichst <span>tropische Sommerabende.</span>
      </p>

      {events.length === 0 && <h3>No events to show</h3>}
      <div className={styles.carddesign}>
        {events.map((lesung) => (
          <AuthorItem key={lesung.id} lesung={lesung}/>
        ))}
      </div>

      <p>
        <span>
          Wir achten auf die Einhaltung der aktuellen Corona-Verordnung.
        </span>{" "}
        Für Bewirtung ist gesorgt. Am Veranstaltungstag wird bei schlechtem
        Wetter ab 16 Uhr auch auf unserer Homepage www.grether.syndikat.org
        darüber informiert, ob die Lesung ausfällt.
      </p>
      <p>
        Unser besonderer Dank geht an das Kulturamt Freiburg, an die
        Buchhandlung jos fritz und das Büro Magenta Freiburg.
      </p>
      <h3>
        <span>Vorverkauf: </span> Buchhandlung jos fritz · Wilhelmstraße 15 ·
        79098 Freiburg Telefon: 0761 / 268 77 · Mail: vorverkauf@josfritz.de
      </h3>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
