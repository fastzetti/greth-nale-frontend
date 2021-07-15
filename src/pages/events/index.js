import Layout from "../../components/Layout";
import { API_URL } from "@/config/index";
import LesungItem from "../../components/LesungItem";

export default function eventsPage({ events }) {
  return (
    <div>
      <Layout title="Lesungen">
        <h1>Lesungen</h1>
        {events.map((lesung) => (
          <LesungItem key={lesung.id} lesung={lesung} />
        ))}
      </Layout>
    </div>
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
