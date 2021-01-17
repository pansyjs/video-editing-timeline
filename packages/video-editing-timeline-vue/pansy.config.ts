import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: ['cjs', 'esm', 'umd'],
    moduleName: 'VideoEditingTimeline'
  },
  bundleNodeModules: true,
  disableTypeCheck: true,
  plugins: {
    vue: true
  }
};

export default config;
