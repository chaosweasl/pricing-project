import { useState } from "react";

import "../styles/App.css";
import Switch from "../components/ui/Switch";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      id="container"
      className="flex min-h-screen h-full justify-center bg-[var(--very-light-grayish-blue)]"
    >
      <div id="pricing-box" className="flex mt-15 text-[var(--grayish-blue)]">
        <h1 id="pricing-header" className="text-4xl">
          Our Pricing
        </h1>
        <Switch enabled={enabled} setEnabled={setEnabled} />
      </div>
      <div id="selection-box" className=""></div>
    </div>
  );
}
