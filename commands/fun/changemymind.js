const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("changemymind")
        .setDescription("Can your friends change your mind?")
        .addStringOption(option =>
            option.setName('text')
                .setDescription('What\'s your unpopular opinion?')
                .setRequired(true)),
    run: async function(client, interaction) {

        const { AttachmentBuilder } = require('discord.js');
        const { Canvas } = require('canvacord');
        await interaction.deferReply();

        const text = interaction.options.getString('text');
        let image = await Canvas.changemymind(text);
        image = await new AttachmentBuilder(image, 'cmm.png');

        await interaction.editReply({ files: [image] });

    }
};