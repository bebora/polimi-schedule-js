import esbuild from "esbuild";
import {fileURLToPath} from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const metadata = `// ==UserScript==
// @name     polimi-schedule-js
// @version  2.0.1
// @match    https://www4.ceda.polimi.it/manifesti/manifesti/controller/GestioneCarrelloPublic.do*
// @match    https://www13.ceda.polimi.it/oralez/oralez/controller/MainDesktop.do*
// @grant    none
// ==/UserScript==
`;

function runBuild() {
  esbuild.buildSync({
    entryPoints: [`${__dirname}/../polimi-schedule.user.js`],
    banner: {
      js: metadata,
    },
    bundle: true,
    minify: true,
    outfile: `${__dirname}/../../dist/polimi-schedule.user.js`,
  })
}

runBuild();
