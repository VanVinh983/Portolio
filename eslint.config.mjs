import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the `no-unused-vars` rule
      "no-unused-vars": "off",
      // Set the `no-console` rule to give warnings only
      "no-console": "warn"
    }
  }
];

export default eslintConfig;
