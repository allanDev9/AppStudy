import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: {
      proxy: {
        "/api": {
          target: env.API_PROXY_TARGET,
          changeOrigin: true,
        },
      },
    },
  };
});
