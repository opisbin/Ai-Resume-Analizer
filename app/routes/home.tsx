import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for Your Dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">

      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your sbmissions and check AI-Powered feedback</h2>
      </div>

    </section>
  </main>
}
