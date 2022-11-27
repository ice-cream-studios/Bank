const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("guild")
        .setDescription("Information about the server/guild you're in"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');

        const timestamp = new Date(interaction.guild.createdAt).toLocaleString()

        const infoEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle('Guild Information')
            .setThumbnail(interaction.guild.iconURL())
            .addFields(
                { name: 'Name', value: interaction.guild.name },
                { name: 'Description', value: interaction.guild.description || 'None set.' },
                { name: 'ID', value: interaction.guild.id },
                { name: 'Owner', value: `<@!${interaction.guild.ownerId}>` },
                { name: 'Shard', value: interaction.guild.shardId.toString() },
                { name: 'Member Count', value: interaction.guild.memberCount.toString() },
                { name: 'Role Count', value: interaction.guild.roles.cache.size.toString() },
                { name: 'Channel Count', value: interaction.guild.channels.cache.size.toString() },
                { name: 'Emoji Count', value: interaction.guild.emojis.cache.size.toString() },
                { name: 'Verification Level', value: interaction.guild.verificationLevel.toString() },
                { name: 'NSFW Level', value: interaction.guild.nsfwLevel.toString() },
                { name: 'Explicit Content Filter', value: interaction.guild.explicitContentFilter.toString() },
                { name: 'Amount Of Nitro Boosters', value: interaction.guild.premiumSubscriptionCount.toString() },
                { name: 'Nitro Boost Level', value: interaction.guild.premiumTier.toString() },
                { name: 'Vanity URL', value: interaction.guild.vanityURLCode || 'None set.' },
                { name: 'Server Created At', value: timestamp },
                { name: 'Ice Cream Embed Colour', value: interaction.embedColour.join(', ') }
            )

        await interaction.reply({ embeds: [infoEmbed], ephemeral: true })

    }
};