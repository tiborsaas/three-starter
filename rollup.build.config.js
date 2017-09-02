import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import ThreeLegacyImport from 'rollup-plugin-threejs-legacy-import';
import glsl from './extra/glsl.rollup';

export default {
	entry: './main.js',
	plugins: [
        ThreeLegacyImport(),
		glsl(),
		babel({
			compact: true,
			presets: [
				['es2015', {modules: false}]
			]
		}),
		nodeResolve({
			jsnext: true,
			main: true
		}),
	],
	targets: [
		{
			format: 'es',
			sourceMap: false,
			dest: 'build/bundle.js'
		}
	]
};
