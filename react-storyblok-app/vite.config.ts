import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// https://vitejs.dev/config/server-options.html to setup 'https' for local environment
export default defineConfig({
  plugins: [basicSsl()],
});
