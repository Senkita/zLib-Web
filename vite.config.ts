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
            "@ctx": resolve(__dirname, "src/hooks/ctx"),
            "@reducers": resolve(__dirname, "src/hooks/reducers"),
            "@intf": resolve(__dirname, "src/intf"),
            "@consts": resolve(__dirname, "src/constants"),
            "@views": resolve(__dirname, "src/views"),
            "@components": resolve(__dirname, "src/components"),
        },
    },
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://BACKEND_DOMAIN/search",
                changeOrigin: true,
                secure: false,
                rewrite: (path: string): string => path.replace(/^\/api/, ""),
            },
        },
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    antd: ["antd"],
                },
            },
        },
    },
});
