const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Flip a coin!"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');

        const response = Math.random() < 0.5;
        const image = 'https://media.istockphoto.com/vectors/coin-flip-vector-id547201522?k=20&m=547201522&s=612x612&w=0&h=jhNFy0waTmCveF5adw55AqTaervBaRqileUgbq5IQfg=';
        await interaction.deferReply();

        const coinflipEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`:coin: | It's ${response ? 'heads' : 'tails'}!`)
            .setImage(image)

        await interaction.editReply({ embeds: [coinflipEmbed] });

    }
};