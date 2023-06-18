import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import ProcessGrid from "./components/Process";
import Services from "./components/Services";
import Header from "./components/Header";
import CTAsection from "./components/CTAsection";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { createClient } from "@supabase/supabase-js";


function App() {

  const supabase = createClient(
    "https://ezwmfnnhbnsuvrnqlklx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6d21mbm5oYm5zdXZybnFsa2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5OTkzMDUsImV4cCI6MjAwMjU3NTMwNX0.nf4ykZZmkCijDLvzFa4aHLF0GyZx1Ps8_XJ7It4qly4"
  );
  // Auth UI
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  //Conditional rendering of auth or homepage
  if (!session) {
    return (
      <div className="auth-container">
        <img alt="retink-logo" src="/assets/retink.png" />
        <div className="auth-in-container">
          <Auth supabaseClient={supabase}  providers={["google"]} appearance={{ theme: ThemeSupa }} />
        </div>
      </div>
    );
  } else {
  return (
    <>
      <nav>
        <div className="mini-container nav-grid">
          <img alt="retink-logo" src="/assets/retink.png" />
          <Button
            className={"btn-purple btn"}
            title={"Sign out"}
            onClick={() => supabase.auth.signOut()}
          />
        </div>
      </nav>
      <main>
        <div className="mini-container">
          <Header />
        </div>
        <div className="max-container">
          <div className="content-section">
            <ProcessGrid />
          </div>
        </div>
        <div className="mini-container">
          <Services />
          <CTAsection />
        </div>
      </main>
      <footer>
        <div className=" footer-cont max-container">
          <Footer />
        </div>
        <div className="footer-bottom">
          <a href="#" className="copywright">
            Copyright © 2021 Retink
          </a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </>
  );
  }
}

export default App;
