const { DiscordRESTError } = require('eris');
const fs = require('fs');
const path = require('path');

Object.keys(require('../package.json').dependencies).forEach(async function (mod) {
    try {
        require.resolve(mod);
    } catch{ 
        console.log(`Found module that isn't installed. Please run "npm i".`);
    }
});

module.exports = async function init() {

    var allCommands = {};

    const dirs = fs.readdirSync(path.join(__dirname + "/../commands"), { withFileTypes: true }).filter(sc => sc.isDirectory()).map(o => o.name);

    dirs.forEach(dirent => {
        allCommands[dirent] = {};
        const commands = fs.readdirSync(path.join(__dirname + `/../commands/${dirent}`)).filter(fi => fi.endsWith(".js"));
        commands.forEach(async function(cmd) {
            try {
                allCommands[dirent][cmd.slice(0, -3)] = require(path.join(__dirname + `/../commands/${dirent}/${cmd}`));
            } catch (e) {
                console.error(`An error occurred whilst loading ${dirent}/${cmd}: ${e}`)
            };
        })
    })

    return allCommands;

}