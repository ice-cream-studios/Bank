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
<<<<<<< HEAD
            const post = await client.globals.reddit(reddit);
=======
            while(true) {
                var post = await client.globals.reddit(reddit);
                // if(!post.image) post.image = '';
                if(post.nsfw && !interaction.channel.nsfw) {
                    await interaction.editReply(`The subreddit \`${reddit}\` is NSFW!`);
                    return;
                }   
                if(!post.nsfw) break;
            }
>>>>>>> b138b36ffa8fec0d5e2ecd0e2cb9692dc2bd75dd

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
