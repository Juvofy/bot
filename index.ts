import packageJSON from "./package.json" with {type: "json"};
import "dotenv/config";
import Bot from "./src/bot.ts";

console.log("Starting bot...");
new Bot().on("ready", client => {
    console.log(`${client.user.username} v${packageJSON.version} ready!`);
});