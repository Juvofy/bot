import SlashCommand from "../src/slash-command.ts";

export default new SlashCommand(
	{
		description: "Show the bot's average ping",
		cooldown: 10,
	},
	async function* () {
		yield `📈 Average ping to API: ${Math.round(this.client.ws.ping)} ms`;
	}
);
