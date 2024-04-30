import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="il_homie">Brokie</TwitterFollowCard>;
      <TwitterFollowCard userName="phralb">Pablo Hernandez</TwitterFollowCard>;
      <TwitterFollowCard userName="vxnder">Vanderhart</TwitterFollowCard>;
    </section>
  );
}
