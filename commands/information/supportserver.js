const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("supportserver")
        .setDescription("Need any help? Here's a quick link to our support server!"),
    run: async function(client, interaction) {

        const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

        const infoEmbed = new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle('Ice Cream Support Server')
            .setDescription('Need any help? Come join us at [discord.gg/kNVTGe9PxZ](https://discord.gg/kNVTGe9PxZ)!')

        const link = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    // .setCustomId('supportservercommandlink')
                    .setLabel('Support Server')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://discord.gg/kNVTGe9PxZ')
            )

        await interaction.reply({ embeds: [infoEmbed], components: [link] })

    }
};