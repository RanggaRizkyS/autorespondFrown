const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity("Prefix: $. Frown Cloud Bot");
})

client.on("message", message => {
  if (message.content === "$payment") {
    const payEmbed = new Discord.MessageEmbed()
        .setTitle(`Payment - FrownCloud`)
        .addField(`Pulsa`, "```088214812908 (Jika pakai pulsa terkena pajak sebesar Rp. 5.000)```")
        .addField(`Qris (Powered By Leopay)`, "```All payment, tinggal scan kode di bawah```")
        .setImage(`https://meflems.github.io/autorespondFrown/qris.png`)
        .setFooter(`https://frownmc.xyz`)
        .setTimestamp();
    message.channel.send(payEmbed); //send
  }
})

client.login(process.env.TOKEN)