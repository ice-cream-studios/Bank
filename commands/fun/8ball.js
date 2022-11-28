const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Let the magical ball decide for you!")
        .addStringOption(option =>
            option.setName('question')
                .setDescription('What is your question?')),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        await interaction.deferReply();

        const eightBallResponseList = [
            "As I see it, yes",
            "Ask again later",
            "Cannot predict now",
            "Don't count on it",
            "It is certain",
            "It is decidedly so",
            "Most likely",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Outlook good",
            "Reply hazy, try again",
            "Signs point to yes",
            "Signs point to no",
            "Very doubtful",
            "Without a doubt",
            "You may rely on it"
        ];
        const index = await Math.floor(Math.random() * (eightBallResponseList.length - 1) + 1);
            
        const eightBallEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`${interaction.options.getString('question') ? interaction.options.getString('question') + '\n' : ''}:8ball: | ${eightBallResponseList[index]}`)

        await interaction.editReply({ embeds: [eightBallEmbed] })

    }
};