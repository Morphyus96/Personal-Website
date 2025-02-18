import { defineConfig } from 'vite'

export default defineConfig({
  // plugins: [react()],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setup.js',
  // },
  server: {
    port: 3000, // You can change this if you'd like
  },
})