import { Switch } from "@headlessui/react";

export default function Example({
  enabled,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: (val: boolean) => void;
}) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full
      bg-gradient-to-r from-[var(--gradient-linear-start)]
      to-[var(--gradient-linear-end)] p-1 transition-opacity
      duration-200 ease-in-out focus:outline-none data-[focus]:outline-1
      data-[focus]:outline-white data-[checked]:bg-gradient-to-r 
      data-[checked]:from-[var(--gradient-linear-start)]
      data-[checked]:to-[var(--gradient-linear-end)]
      hover:opacity-80"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 
        rounded-full bg-white ring-0 shadow-lg transition duration-200 
        ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
}
