import { Button } from "@mantine/core";

import { useState } from "react";
import { Calendar } from "@mantine/dates";

function Demo() {
  const [value, setValue] = useState(null);
}
export function MyApp() {
  return (
    <div>
      <Calendar value={value} onChange={setValue} />;
      <Button>Hello world!</Button>
    </div>
  );
}
