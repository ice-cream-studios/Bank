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
        if(typeof reddit !== 'string') reddit = reddit.toString();
        await interaction.deferReply();
        
        try {
            const post = await client.globals.reddit(reddit);

            const redditEmbed = await new EmbedBuilder()
                .setColor(interaction.embedColour)
                .setTitle(`${reddit}: ${post.title}`)
                .setURL(post.url)

            if(post.description) redditEmbed.setDescription(post.description);
            if(post.image) redditEmbed.setImage(post.image);

            await interaction.editReply({ embeds: [redditEmbed] });
        } catch(e) {
            await interaction.editReply(`The subreddit \`${reddit}\` does not exist, or the post found was NSFW; if you think this is a mistake then please try again.`);
        }

    }
};
