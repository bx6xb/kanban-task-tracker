import { useEffect, useState } from "react";
import { TasksPage } from "../pages";
import { Providers } from "./Providers";
import { Preloader } from "../shared";

export function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  const toggleIsAppLoading = () => setIsAppLoading(!isAppLoading);

  useEffect(() => {
    window.addEventListener("load", toggleIsAppLoading);

    return () => window.removeEventListener("load", toggleIsAppLoading);
  }, []);

  return (
    <Providers>
      <Preloader isHidden={!isAppLoading} />

      <TasksPage />
    </Providers>
  );
}
