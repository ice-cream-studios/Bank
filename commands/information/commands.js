const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("commands")
        .setDescription("A full list of our commands"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');

        const commands = [];
        client.commands.forEach(async function(cmd) {
            commands.push({ name: cmd.name, cat: cmd.category })
        })

        const infoEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle('Ice Cream Commands')
            .addFields(
                { name: '😜 Fun', value: returnCommands('fun') },
                { name: '📜 Information', value: returnCommands('information') },
                { name: '🔨 Moderation', value: returnCommands('moderation') },
                { name: '💡 Suggestions', value: returnCommands('suggestions') },
                { name: '⚙ Settings', value: returnCommands('settings') },
            )

        await interaction.reply({ embeds: [infoEmbed] })

        function returnCommands(category) {
            return commands.filter(cmd => cmd.cat === category).map(cmd => `\`/${cmd.name}\``).join(', ') || 'None';
        }

    }
};