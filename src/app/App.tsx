import { TasksPage } from "../pages";
import { Providers } from "./Providers";

export function App() {
  return (
    <Providers>
      <TasksPage />
    </Providers>
  );
}
