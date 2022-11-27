const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    slashData: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("Sends a random meme of Reddit!"),
    run: async function(client, interaction) {

        const { EmbedBuilder } = require('discord.js');
        
        await interaction.deferReply();

        while(true) {
            var post = await client.globals.reddit('memes');
            if(!post.nsfw && post.image?.includes('https://i.redd.it') && post.upvotes > 150) break;
        }

        const memeEmbed = await new EmbedBuilder()
            .setColor(interaction.embedColour)
            .setTitle(`Here\'s your meme!`)
            .setURL(post.url)
            .setImage(post.image);

        await interaction.editReply({ embeds: [memeEmbed] });

    }
};