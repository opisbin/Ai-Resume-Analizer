import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import type { Resume } from "../../types";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "lib/puter";
import { use, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for Your Dream Job!" },
  ];
}

export default function Home() {
    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section py-16">

      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings</h1>
        <h2>Review your sbmissions and check AI-Powered feedback</h2>
      </div>

      {resumes.length > 0 &&(
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
      )}
    </section>
  </main>
}
