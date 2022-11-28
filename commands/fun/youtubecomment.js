const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("youtubecomment")
        .setDescription("Turn a message into a YouTube comment!")
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What\'s the message for your comment?')
                .setRequired(true)),
    run: async function(client, interaction) {

        const { AttachmentBuilder } = require('discord.js');
        const { Canvas } = require('canvacord');
        await interaction.deferReply();

        const avatar = interaction.member.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await Canvas.youtube({ username: interaction.member.displayName, content: interaction.options.getString('message'), avatar: avatar });
        image = await new AttachmentBuilder(image, 'youtubecomment.png');

        await interaction.editReply({ files: [image] });

    }
};