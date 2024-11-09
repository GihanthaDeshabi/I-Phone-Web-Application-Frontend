import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), sentryVitePlugin({
        org: "gda-4g",
        project: "javascript-react",
        url: "https://sentry.io/"
    })],
    build: {
        rollupOptions: {
            external: ['path', 'fs', 'url', 'source-map-js'],
        },

        sourcemap: true
    },
});