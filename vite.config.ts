import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@styles": resolve(__dirname, "assets/styles"),
            "@images": resolve(__dirname, "assets/images"),
            "@routes": resolve(__dirname, "src/routes"),
            "@utils": resolve(__dirname, "src/utils"),
            "@stores": resolve(__dirname, "src/stores"),
            "@intf": resolve(__dirname, "src/intf"),
            "@views": resolve(__dirname, "src/views"),
            "@components": resolve(__dirname, "src/components"),
        },
    },
    server: {
        proxy: {
            "/search": {
                target: "http://BACKEND_DOAMIN/search",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/search/, ""),
            },
        },
    },
});
