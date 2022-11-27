const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("reddit")
        .setDescription("Send a post from a subreddit of your choice!")
        .addStringOption(option =>
            option.setName('reddit')
                .setDescription('Which reddit do you want to see?')
                .setRequired(true)),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        const reddit = await interaction.options.getString('reddit');
        await interaction.deferReply();
        
        try {
            while(true) {
                var post = await client.globals.reddit(reddit);
                if(!post.image) post.image = '';
                if(!post.nsfw && post.image?.includes('https://i.redd.it')) break;
            }

            const redditEmbed = await new EmbedBuilder()
                .setColor(interaction.embedColour)
                .setTitle(`${reddit}: ${post.title}`)
                .setURL(post.url)
                .setImage(post.image);

            await interaction.editReply({ embeds: [redditEmbed] });
        } catch(e) {
            await interaction.editReply(`The subreddit \`${reddit}\` does not exist!`);
        }

    }
};