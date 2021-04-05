const { RichEmbed } = require("discord.js"); 
//lordcreative- discord.gg/codeworld
module.exports.run = async (client, message, args) => {
  const keremrk = new RichEmbed()
    .setDescription("İstenmediğim Yerde Durmam! 😐")//lordcreative- discord.gg/codeworld
    .setTitle(`Elveda 🤐`)
    .setTimestamp()
    .setThumbanil(client.user.avatarURL)//lordcreative- discord.gg/codeworld
    .setColor("YELLOW")
    .setFooter(`${message.guild.name}`);
  message.channel.send(keremrk);
  message.guild.leave();
};

module.exports.conf = {//lordcreative- discord.gg/codeworld
  enabled: true,
  guildOnly: false,
  aliases: ["leave"],
  permLevel: 0
};//lordcreative- discord.gg/codeworld
//lordcreative- discord.gg/codeworld
module.exports.help = {
  name: "ayrıl",//lordcreative- discord.gg/codeworld
  description: "",
  usage: ""
};
