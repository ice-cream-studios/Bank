const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("info")
        .setDescription("this is just for testing"),
    run: function (client, interaction, databases, parameters) {
        const { MessageEmbed } = require("discord.js-light");
        const embed = new MessageEmbed()
            .setTitle("Need any help?")
            .setDescription("If you need any help, feel free to join the Ice Cream Studios Discord server [here](https://discord.gg/XUPHpTrZdP). Type `/` in your chatbox to see the slash commands menu, including commands from Ice Cream and all of your other bots.")
            .setColor("RANDOM")
            .setTimestamp();
        interaction.reply({ embeds: [embed] });
    }
};