const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("admin")
        .setDescription("Do you have admin perms?"),
    permissions: ['Administrator'],
    run: async function(client, interaction) {
        interaction.reply(`it works, you have admin`);
    }
};