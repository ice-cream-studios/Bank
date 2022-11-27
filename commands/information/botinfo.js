const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("Information about Ice Cream"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');

        const infoEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle('Ice Cream Information')
            .addFields(
                { name: 'Description', value: `Welcome, and thanks for using Ice Cream! Ice Cream is a refreshed Discord bot, still in the works. Sorry about any bugs!` },
                { name: 'Library', value: `Discord.JS v${require('discord.js').version}`, inline: true },
                { name: 'Node.JS Version', value: process.version, inline: true },
                { name: 'Bot Version', value: `Butterscotch v${client.pkg.version}`, inline: true },
                { name: 'Developer', value: '[Ice Cream Studios](https://icstudios.dev/)', inline: true },
            )

        await interaction.reply({ embeds: [infoEmbed] })

    }
};