const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("blur")
        .setDescription("Blur you or your friend's avatar!")
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Who\'s avatar do you want? Leave blank for yourself!')),
    run: async function(client, interaction) {

        const { AttachmentBuilder } = require('discord.js');
        const { Canvas } = require('canvacord');
        await interaction.deferReply();

        const user = interaction.options.getUser('user') || interaction.user;
        const avatar = user.avatarURL({ dynamic: true }) || 'https://cdn.discordapp.com/embed/avatars/0.png';
        let image = await Canvas.blur(avatar);
        image = await new AttachmentBuilder(image, 'blur.png');

        await interaction.editReply({ files: [image] });

    }
};