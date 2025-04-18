import { useState } from "react";

import "../styles/App.css";
import Switch from "../components/ui/Switch";
import Subscriptions from "../components/Subscriptions";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      id="container"
      className="flex flex-col min-h-screen items-center bg-[var(--very-light-grayish-blue)] pb-50"
    >
      <div
        id="pricing-box"
        className="flex mt-15 text-[var(--grayish-blue)] scale-130"
      >
        <h1 id="pricing-header" className="text-4xl">
          Our Pricing
        </h1>
      </div>
      <div id="selection-box" className="flex flex-row gap-5 mt-7 scale-130">
        <h1 className="text-[var(--light-grayish-blue)]">Annually</h1>
        <Switch enabled={enabled} setEnabled={setEnabled} />
        <h1 className="text-[var(--light-grayish-blue)]">Monthly</h1>
      </div>
      <div
        id="pricing-options"
        className="flex sm: mt-50 md:mt-10 lg:mt-30 w-full justify-center items-center scale-130 md:scale-90 lg:scale-120"
      >
        <Subscriptions enabled={enabled} />
      </div>
    </div>
  );
}
