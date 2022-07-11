/**
 * @type {import('vite').UserConfig}
 */
const config = {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  server: {
    host: true,
  },
};

export default config;
