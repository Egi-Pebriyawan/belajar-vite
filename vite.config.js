import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "production", // Hasil build masuk folder 'production'
    rollupOptions: {
      input: {
        // <--- WAJIB DIMASUKKAN KE DALAM SINI
        main: "index.html",
        blog: "blog.html",
        contact: "other/contact.html",
      },
    },
  },
  server: {
    port: 3000, // Jalan di localhost:3000
  },
});
