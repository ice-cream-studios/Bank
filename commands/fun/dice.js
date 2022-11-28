const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("dice")
        .setDescription("Roll a die, or multiple dice!")
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('How many dice do you want to roll?'))
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('How many sides should the dice have?')),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        await interaction.deferReply();
 
        const number = await interaction.options.getInteger('number') || 1;
        const sides = await interaction.options.getInteger('sides') || 6;
        if(number > 10) return interaction.reply({ content: 'You can only roll 10 dice, you\'ve rolled too many.', ephemeral: true })
        const image = 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        const dieOrDice = number === 1 ? 'a die and it landed on the following result' : 'some dice and they landed on the following results';

        const result = [];
        for(let i = 1; i <= number; i++) {
            await result.push(Math.floor(Math.random() * sides) + 1);
        }

        const diceEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`I rolled ${dieOrDice}!:\n:game_die: | ${result.join(', ')}`)
            .setImage(image)

        await interaction.editReply({ embeds: [diceEmbed] })

    }
};