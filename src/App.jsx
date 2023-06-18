import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./supabaseclient";
import ProcessGrid from "./components/Process";
import Services from "./components/Services";
import Header from "./components/Header";
import CTAsection from "./components/CTAsection";

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

  // if (!session) {
  //   return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  // } else {
  return (
    <>
      <nav>
        <div className="mini-container">

          <img alt="retink-logo" width="80%" src="/src/assets/retink.png" />
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
    </>
  );
  // }
}

export default App;
