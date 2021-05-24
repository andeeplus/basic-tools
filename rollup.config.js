import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import packageJSON from './package.json';

const input = './src/index.js';
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs',
      globals: {
        '@babel/runtime/regenerator': 'regeneratorRuntime'
      }
    },
    external: [...Object.keys(packageJSON.peerDependencies)],
    plugins: [
      babel({
        babelrc: false,
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [['module-resolver', { root: ['./'] }], 'babel-plugin-styled-components']
      }),

      nodeResolve({
        extensions: ['.js', '.jsx']
      }),
      external(),
      resolve({ preferBuiltins: true }),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs',
      globals: {
        '@babel/runtime/regenerator': 'regeneratorRuntime'
      }
    },
    external: [...Object.keys(packageJSON.peerDependencies)],
    plugins: [
      babel({
        babelrc: false,
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [['module-resolver', { root: ['./'] }], 'babel-plugin-styled-components']
      }),
      nodeResolve({
        extensions: ['.js', '.jsx']
      }),
      external(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      terser()
    ]
  }
];
