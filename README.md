# jWidget 2 project template

1. Download it from GitHub as zip file.
2. Extract it to some folder.
3. Run `npm install` to setup dependencies.
4. Run `npm start` to build the project and initialize the file watcher.
5. Serve `public` folder with some Web server, for example:
    1. Install `serve` module: `npm install -g serve`.
    2. Run `serve public` to serve `public` folder.
    3. Open the provided URL in your Web browser.
6. Before initial commit to a publicly available repository, you should:
    1. Adjust `README.md` file with your project description.
    2. Replace the `LICENSE` file with your desired license.
    3. Change the package name and version in `package.json` file.
7. You are then free to do any edits in any files incl. npm/TypeScript/WebPack configuration files, HTML templates,
source files, static files etc. to satisfy your needs.

This template is designed for painless [jWidget 2](http://enepomnyaschih.github.io/jwidget/2.1/) integration with
TypeScript and WebPack.

See [jWidget 2 tutorials](http://enepomnyaschih.github.io/jwidget/2.1/tutorials/tutorial1.html) to get involved.

Template features:

1. Uses [npm](https://www.npmjs.com/) for dependency management.
2. Uses [WebPack](https://webpack.js.org/) for project building and bundling.
3. Uses [TypeScript](https://www.typescriptlang.org/) as a programming language.
4. Uses [Stylus](http://stylus-lang.com/) as CSS preprocessor.
5. Installs [es6-promise polyfill](https://www.npmjs.com/package/es6-promise), [jQuery](http://jquery.com/) and
[jWidget 2](https://www.npmjs.com/package/jwidget) out of the box and integrates them smoothly with each other.
6. Reads entry point list from simple `webpack/pages.js` configuration file.
7. Reads page HTML templates from `webpack` folder (default: `template.html`).
8. Reads input from `src` folder.
9. Writes output to `public` folder.
10. For each entry point, creates an HTML file with all necessary resources attached.
11. Extracts common chunks of code to separate files.
12. Generates source maps (only in development build).
13. Copies static files from `static` folder to `public` folder.
14. Before initial build, deletes `public` folder with all its contents.
15. Supports the following file extensions (i.e. WebPack loaders):
    * ts - TypeScript files.
    * styl - Stylus files.
    * jw.html - jWidget component templates (see `webpack/CustomHtmlLoader.js` for details).
    * png, jpg, gif, svg, eot, ttf, woff, woff2 - other resources attached with [url-loader](https://www.npmjs.com/package/url-loader).
16. Supports the following npm scripts:
    * `npm start` - Builds the project for development/debugging and starts watching for changes.
    * `npm run build-dev` - Builds the project one time for development/debugging.
    * `npm run build` - Builds the project one time and optimizes it for deployment to production.
17. Provides type definition file for CommonJS `require` statements.
18. Provides `.gitignore` file to filter off the garbage.
19. Shortens WebPack output to provide only important information.
20. Provides you with jWidget "Hello, World!" sample code to start with.

The template is distributed under terms of [MIT license](https://opensource.org/licenses/MIT).
