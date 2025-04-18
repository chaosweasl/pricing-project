import "../styles/App.css";

interface SubscriptionsProps {
  enabled: boolean;
}

export default function Subscriptions({ enabled }: SubscriptionsProps) {
  const plans = [
    {
      name: "Basic",
      price: enabled ? "19.99" : "199.99",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      name: "Professional",
      price: enabled ? "24.99" : "249.99",
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      name: "Master",
      price: enabled ? "39.99" : "399.99",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];

  return (
    <div
      id="selection-items-container"
      className="text-[var(--grayish-blue)] flex flex-col gap-3 md:flex-row lg:flex-row"
    >
      {plans.map((plan, index) => {
        const isPro = plan.name === "Professional";

        return (
          <div
            key={index}
            className={`flex flex-col items-center gap-5 w-70 rounded-lg shadow-lg p-10 ${
              isPro
                ? "bg-gradient-to-b from-[var(--gradient-linear-start)] to-[var(--gradient-linear-end)] text-white scale-110"
                : "bg-white text-[var(--grayish-blue)]"
            }`}
          >
            <h1 className="text-sm">{plan.name}</h1>
            <h2
              className={`text-5xl flex items-center gap-3 ${
                isPro ? "" : "text-[var(--dark-grayish-blue)]"
              }`}
            >
              <span className="text-2xl">$</span>
              {plan.price}
            </h2>
            {plan.features.map((feature, i) => (
              <h3
                key={i}
                className={`w-full flex justify-center py-3 text-xs border-[var(--light-grayish-blue)] ${
                  i === 0 ? "border-t border-b" : "border-b -mt-5"
                } ${isPro ? "border-white" : ""}`}
              >
                {feature}
              </h3>
            ))}
            <button
              className={`cursor-pointer w-full p-2 items-center justify-center flex rounded-lg text-xs ${
                isPro
                  ? "text-transparent bg-white pro-button-gradient"
                  : "text-white bg-gradient-to-b from-[var(--gradient-linear-start)] to-[var(--gradient-linear-end)] button-gradient"
              }`}
            >
              <h1
                className={`${
                  isPro ? "text-gradient" : ""
                } flex justify-center items-center`}
              >
                LEARN MORE
              </h1>
            </button>
          </div>
        );
      })}
    </div>
  );
}
