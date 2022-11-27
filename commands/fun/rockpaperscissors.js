const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
    .setName("rockpaperscissors")
        .setDescription("Play a game of rock-paper-scissors!")
        .addStringOption(option =>
            option.setName('rockpaperorscissors')
                .setDescription('Which move do you wish to play?')
                .setRequired(true)
                .addChoices(
                    { name: 'Rock', value: 'rock' },
                    { name: 'Paper', value: 'paper' },
                    { name: 'Scissors', value: 'scissors' },
                )),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');

        const choice = await interaction.options.getString('rockpaperorscissors');
        let response = '';
        const responseList = ['rock', 'paper', 'scissors'];
        const result = responseList[Math.floor(Math.random() * responseList.length)];

        if(choice === result) response = 'It\'s a tie! We had the same choice.';
        if(!response) {
            switch (choice) {
                case 'rock': {
                    if (result === 'paper') response = 'You lose! You chose rock, I chose paper';
                    else response = `You won! You chose rock, I chose scissors.`;
                    break;
                }
                case 'paper': {
                    if (result === 'scissors') response = 'You lose! You chose paper, I chose scissors.';
                    else response = `You won! You chose paper, I chose rock.`;
                    break;       
                }
                case 'scissors': {
                    if (result === 'rock') response = 'You lose! You chose scissors, I chose rock.';
                    else response = `You won! You chose scissors, I chose paper.`;
                    break;
                }
            } 
        }

        const embed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`:rock: :newspaper: :scissors: | ${response}`)

        await interaction.reply({ embeds: [embed] });

    }
};