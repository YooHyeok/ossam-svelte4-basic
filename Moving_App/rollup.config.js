import { spawn } from 'child_process';
import fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';

const production = !process.env.ROLLUP_WATCH;
const deploy = process.env.DEPLOY === 'true';
const outputDir = deploy ? 'public' : 'public-local';
const BASE_PATH = deploy ? '/svelte4-basic-moving' : '';
const BASE_HREF = deploy ? `${BASE_PATH}/` : '/';
const ROUTER_MODE = deploy ? 'hash' : 'history';

const copyLocalAsset = (asset) => {
	const source = `public/${asset}`;
	const target = `${outputDir}/${asset}`;

	if (!deploy && fs.existsSync(source)) {
		fs.cpSync(source, target, { recursive: true });
	}
};

// public/index.template.html 을 처리해서 진입 HTML 생성
const htmlReplace = () => {
	return {
		name: 'html-replace',
		buildEnd() {
			const template = 'public/index.template.html';
			const outputs = [`${outputDir}/index.html`, `${outputDir}/404.html`];
			if (fs.existsSync(template)) {
				fs.mkdirSync(outputDir, { recursive: true });
				['favicon.png', 'global.css', 'img', 'static'].forEach(copyLocalAsset);
				fs.mkdirSync(`${outputDir}/static`, { recursive: true });
				fs.writeFileSync(
					`${outputDir}/static/config.js`,
					`window.CONFIG = {\n  BASE_URL: '${BASE_PATH}',\n  ROUTER_MODE: '${ROUTER_MODE}'\n};\n`
				);
				const html = fs.readFileSync(template, 'utf8').replace(/__BASE_URL__/g, BASE_HREF);
				outputs.forEach((output) => fs.writeFileSync(output, html));
			}
		}
	};
}

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: `${outputDir}/build/bundle.js`
	},
	plugins: [
		htmlReplace(),
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),
		json({compact: true}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload(outputDir),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
