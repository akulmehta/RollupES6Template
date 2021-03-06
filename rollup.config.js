import { terser } from 'rollup-plugin-terser';
import * as meta from "./package.json"; //get info from package.json for copyright details

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false

const moduleName = 'myModule'; //Change this value to change module name
const copyright = `// ${meta.homepage} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`; //make copyright statement

function onwarn(message, warn) {
	if (message.code === "CIRCULAR_DEPENDENCY") return;
	warn(message);
}

export default {
	input: 'src/main.js',
	output: [
		{
			file: 'public/bundle.js', //change filename for output file to the filename you desire
			format: 'umd', // Universal Module Definition for creating d3.js like module
			//sourcemap: true,
			name: 'myModule',
			plugins: [],
			banner: copyright //adds the copyright
		},
		{
			file: 'public/bundle.min.js',
			format: 'umd', // Universal Module Definition for creating d3.js like module
			//sourcemap: true,
			name: 'myModule',
			plugins: [
				terser({ output: { preamble: copyright } }) // minify and add copyright
			]
		},
	]

};
