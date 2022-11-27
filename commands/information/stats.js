const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Ice Cream statistics"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        const os = require('os');

        const stats = await client.globals.stats(client);
        // const servers = await client.globals.stats(client).servers;
        // const users = await client.globals.stats(client).users;
        // const channels = await client.globals.stats(client).channels;

        const infoEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle('Ice Cream Statistics')
            .addFields(
                { name: 'Servers', value: stats.servers.toString() },
                { name: 'Users', value: stats.users.toString() },
                { name: 'Channels', value: stats.channels.toString() },
                { name: 'Node Version', value: process.version },
                { name: 'Butterscotch Version', value: 'v' + client.pkg.version },
                { name: 'Library', value: `Discord.JS v${require('discord.js').version}` },
                { name: 'Memory Usage', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` },
                { name: 'Host OS', value: `${os.type()} ${os.release()} (${os.arch()})` },
                { name: 'Message Latency', value: (Date.now() - interaction.createdTimestamp).toString() },
            )

        await interaction.reply({ embeds: [infoEmbed] })

    }
};