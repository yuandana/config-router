import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import fileSize from 'rollup-plugin-filesize';
import pkg from './package.json'

const env = process.env.NODE_ENV

const config = {
    input: `./src/index.js`,
    external: Object.keys(pkg.peerDependencies || {}),
    output: [
        {
            file: `./dist/es/index.js`,
            format: 'es',
            name: '@yuandana/config-router',
            globals: {
                react: 'React',
                'lodash-es': 'lodashES',
                'react-router-dom': 'ReactRouterDOM',
            },
        },
        {
            file: `./dist/umd/index.js`,
            format: 'umd',
            name: '@yuandana/config-router',
            globals: {
                react: 'React',
                'lodash-es': 'lodashES',
                'react-router-dom': 'ReactRouterDOM',
            },
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            exclude: '**/node_modules/**',
            babelHelpers: 'runtime'
        }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV),
            preventAssignment: true
        }),
        terser(),
        fileSize()
    ]
};

if (env === 'production') {
    config.plugins.push(
        terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    );
}

export default config;
