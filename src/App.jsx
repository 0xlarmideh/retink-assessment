import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseclient";
import ProcessGrid from "./components/Process";
import Services from "./components/Services";
import Header from "./components/Header";
import CTAsection from "./components/CTAsection";
import Footer from "./components/Footer";
import Button from "./components/Button";


function App() {
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

  if (!session) {
    return (
      <div className="auth-container">
        <img alt="retink-logo" src="/src/assets/retink.png" />
        <div className="auth-in-container">
          <Auth supabaseClient={supabase} providers={["google"]} appearance={{ theme: ThemeSupa }} />
        </div>
      </div>
    );
  } else {
  return (
    <>
      <nav>
        <div className="mini-container nav-grid">
          <img alt="retink-logo" src="/src/assets/retink.png" />
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
