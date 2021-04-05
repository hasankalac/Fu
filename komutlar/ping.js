const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
  let info = client.emojis.get("ℹ") || "ℹ️";//lordcreative- discord.gg/codeworld
  let keremping = new RichEmbed()
    .setTitle(`${info}  Ping Bilgilendirme`)
    .setDescription(`**Anlık Ping: __${Math.round(client.ping)}ms__**`)//lordcreative- discord.gg/codeworld
    .setColor("BLUE")
    .setFooter(`${message.author.tag}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);//lordcreative- discord.gg/codeworld
  message.channel.send(keremping);
};//lordcreative- discord.gg/codeworld


module.exports.conf = {
  enabled: true,
  guildOnly: false,//lordcreative- discord.gg/codeworld
  aliases: [],
  permLevel: 0
};
//lordcreative- discord.gg/codeworld
module.exports.help = {
  name: "ping",
  description: "",//lordcreative- discord.gg/codeworld
  usage: ""
};
