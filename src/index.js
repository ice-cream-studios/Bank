const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const app = require('express')();
const config = require('../config.js');

app.get('/', async function(req, res) {
    var allCommands = {};
    const dirs = await fs.readdirSync(path.join(__dirname + "/../commands"), { withFileTypes: true }).filter(sc => sc.isDirectory()).map(o => o.name);
    await dirs.forEach(async function(dirent) {
        allCommands[dirent] = {};
        const commands = await fs.readdirSync(path.join(__dirname + `/../commands/${dirent}`)).filter(fi => fi.endsWith(".js"));
        await commands.forEach(async function(cmd) {
            try {
                allCommands[dirent][cmd.slice(0, -3)] = await require(path.join(__dirname + `/../commands/${dirent}/${cmd}`));
                allCommands[dirent][cmd.slice(0, -3)].run = await allCommands[dirent][cmd.slice(0, -3)].run.toString()
            } catch (e) {
                await console.error(`An error occurred whilst loading ${dirent}/${cmd}: ${e}`)
            };
        })
    })
    await require("util").promisify(setTimeout)(1000 * 2);
    await res.send({
        status: 200,
        response: JSON.stringify(allCommands),
    });
});

app.listen(config.port, config.listener, function () {
    console.log(chalk.green("[+]") + " Listening on port " + config.port);
});