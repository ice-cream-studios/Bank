const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("animal")
        .setDescription("Sends an image of an animal of your choice")
        .addStringOption(option =>
            option.setName('species')
                .setDescription('Which animal do you want to see?')
                .setRequired(true)
                .addChoices(
                    { name: 'Bird', value: 'bird' },
                    { name: 'Cat', value: 'cat' },
                    { name: 'Chicken', value: 'chicken' },
                    { name: 'Dog', value: 'dog' },
                    { name: 'Dolphin', value: 'dolphin' },
                    { name: 'Fish', value: 'fish' },
                    { name: 'Panda', value: 'panda' },
                    { name: 'Tiger', value: 'tiger' },
                    { name: 'Random!', value: 'animal' },
                )),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        const animal = await interaction.options.getString('species');

        const animalReddits = await new Map([
            ['bird', { msg: 'Chirp!', sub: 'birds' }],
            ['cat', { msg: 'Meow!', sub: 'meow_irl' }],
            ['chicken', { msg: 'Cluck!', sub: 'chickens' }],
            ['dog', { msg: 'Woof!', sub: 'dogpictures' }],
            ['dolphin', { msg: '', sub: 'dolphins' }],
            ['fish', { msg: 'Blub!', sub: 'fish' }],
            ['panda', { msg: '', sub: 'pandas' }],
            ['tiger', { msg: 'Roar!', sub: 'tigersareourfriends' }],
            ['animal', { msg: '', sub: 'aww' }]
        ])
        
        while(true) {
            var post = await client.globals.reddit(animalReddits.get(animal).sub);
            if(!post.nsfw && post.image?.includes('https://i.redd.it')) break;
        }

        const animalEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`${animalReddits.get(animal).msg} Here\'s your ${animal}!`)
            .setURL(post.url)
            .setImage(post.image);

        await interaction.reply({ embeds: [animalEmbed] });

    }
};