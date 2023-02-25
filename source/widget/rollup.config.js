import babel from '@rollup/plugin-babel';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';

const exportName = 'drh';
const babelOptions = {
  babelHelpers: 'bundled',
  exclude: 'node_modules/**'
};
const externalDeps = ['react'];

export default [
  {
    input: 'src/header.js',
    output: {
      file: 'dist/header.js',
      format: 'umd'
    },
    plugins: [babel(babelOptions)],
    external: externalDeps
  }
];

// export default [
//   {
//     input: 'src/index.js',
//     output: {
//       file: pkg.module,
//       format: 'es',
//     },
//     plugins: [
//       babel(babelOptions),
//     ],
//     external: externalDeps
//   },
//   {
//     input: 'src/index.js',
//     output: {
//       file: pkg.main,
//       format: 'cjs',
//       exports: 'auto',
//     },
//     plugins: [
//       babel(babelOptions),
//     ],
//     external: externalDeps
//   },
//   {
//     input: 'src/index.js',
//     output: {
//       file: pkg.browser,
//       format: 'umd',
//       name: exportName,
//     },
//     plugins: [
//       resolve(),
//       babel(babelOptions),
//       commonjs()
//     ],
//     external: externalDeps
//   },
//   {
//     input: 'src/index.js',
//     output: {
//       file: pkg.browser.replace(/\.js$/, '.min.js'),
//       format: 'umd',
//       name: exportName,
//     },
//     plugins: [
//       resolve(),
//       babel(babelOptions),
//       commonjs(),
//       terser()
//     ],
//     external: externalDeps
//   }
// ]
