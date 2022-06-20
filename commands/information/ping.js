const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Shows the bot's ping!"),
    run: async function(client, interaction) {
        interaction.reply(`🏓Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
};