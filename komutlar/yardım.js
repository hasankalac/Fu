const { RichEmbed } = require("discord.js");//lordcreative- discord.gg/codeworld
const config = require("../ayarlar.json");
module.exports.run = async (client, message, args) => {//lordcreative- discord.gg/codeworld
  let kerem = new RichEmbed()
    .setDescription(
      `**__YARDIM MENÜSÜ__**\n \n**
• \`${config.prefix}bilgi\`       __Bot Kendini Tanıtır!__\n
• \` ${config.prefix}ayrıl\`      __Bot Serverinizden Ayrılır!__\n//lordcreative- discord.gg/codeworld
• \` ${config.prefix}ping\`       __Bot Kendi Pingi'ni Gösterir!__\n
• \` ${config.prefix}yedek\`      __Yedek Komutlarını Gösterir!__**`
    )
    .setThumbnail(client.user.avatarURL)//lordcreative- discord.gg/codeworld
    .setTimestamp()
    .setFooter(`${message.author.tag}`)
  message.channel.send(kerem);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],//lordcreative- discord.gg/codeworld
  permLevel: 0
};

module.exports.help = {
  name: "yardım",//lordcreative- discord.gg/codeworld
  description: "",
};
//lordcreative- discord.gg/codeworld