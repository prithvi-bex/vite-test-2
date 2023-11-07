import type { Config } from "tailwindcss";

import { tailwindPlugin } from "./src/lib/tailwind-plugin";

const config = {
  content: ["src/**/*.{ts,tsx}"],
  plugins: [tailwindPlugin],
} satisfies Config;

export default config;
