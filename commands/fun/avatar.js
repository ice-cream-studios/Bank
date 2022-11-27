const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Replies with someone's avatar")
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Who\'s avatar do you want? Leave blank for yourself!')),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
 
        const user = interaction.options.getUser('user') || interaction.user;
        const avatar = user.avatarURL({ dynamic: true }) || 'https://cdn.discordapp.com/embed/avatars/0.png';

        const avatarEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`Here's ${user.username}'s avatar!`)
            .setImage(avatar)

        await interaction.reply({ embeds: [avatarEmbed] })

    }
};