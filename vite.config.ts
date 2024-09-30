import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "development" ? "/" : "./",
  server: {
    port: 5000, // 서버 포트 번호 변경
  },
  define: {
    global: '{}', // 글로벌 객체를 빈 객체로 대체
  },
  build: {
    outDir: 'build', // build 폴더명 변경
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     },
    //   },
    // },
    // chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      {
        find: '@styles',
        replacement: resolve(__dirname, './src/assets/scss'),
      },
    ],
  },
});
