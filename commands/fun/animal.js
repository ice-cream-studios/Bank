const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("animal")
        .setDescription("uwu animal"),
    run: async function(client, interaction) {
        interaction.reply(`a`);
    }
};