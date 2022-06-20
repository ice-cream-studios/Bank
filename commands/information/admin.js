const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("admin")
        .setDescription("Do you have admin perms?"),
    permissions: ['ADMINISTRATOR'],
    run: async function(client, interaction) {
        interaction.reply(`it works, you have admin`);
    }
};