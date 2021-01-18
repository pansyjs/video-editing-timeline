import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: [
      'cjs',
      'esm',
      'umd'
    ],
    moduleName: 'VideoEditingTimeline'
  },
  // externals: [
  //   ...Object.keys(require('./package').dependencies),
  //   ...Object.keys(require('./package').peerDependencies)
  // ],
  disableTypeCheck: true
}

export default config
