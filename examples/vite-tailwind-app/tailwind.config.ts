import type { Config } from "tailwindcss";

import { tailwindPlugin } from "bootes-studio-ui-components";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tailwindPlugin],
} satisfies Config;

export default config;
