const { RichEmbed } = require("discord.js"); //lordcreative- discord.gg/codeworld
const config = require("../ayarlar.json");
//lordcreative- discord.gg/codeworld
module.exports.run = async (client, message, args) => {
  let keremb = new RichEmbed()//lordcreative- discord.gg/codeworld
    .setColor("BLUE")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()

    .setTitle("Bot Bilgilendirme")//lordcreative- discord.gg/codeworld
    .addField("• Prefix", `${config.prefix}`, true)
    .addField("• Toplam Sunucu", client.guilds.size, true)
    .addField("• Toplam Kullanıcı", client.users.size, true)
  message.channel.send(keremb);//lordcreative- discord.gg/codeworld
};//lordcreative- discord.gg/codeworld

module.exports.conf = {
  enabled: true,//lordcreative- discord.gg/codeworld
  guildOnly: false,
  aliases: ["info"],
  permLevel: 0
};//lordcreative- discord.gg/codeworld

module.exports.help = {
  name: "bilgi",
  description: "",//lordcreative- discord.gg/codeworld
  usage: ""
};

