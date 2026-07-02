import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";

function App() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box justifyContent="center" alignItems="flex-end"></box>
      <textarea focused placeholder={"Hello world"} />
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
