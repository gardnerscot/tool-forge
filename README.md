# Tool Forge ⚒️

MCP Bridge Dashboard — manage, test, and create tools for your MCP bridge.

## Features

- **Server Health** — live status of all bridge servers
- **Tool Catalog** — searchable list of all tools with server badges
- **Tool Tester** — pick a tool, auto-generate params from schema, execute
- **Custom Tools** — create, edit, and delete custom tools that run shell commands
- **Activity Log** — execution history with timing
- **Proverbs Splash** — random verse from Proverbs on every load

## Usage

1. Make sure your [MCP bridge](https://github.com/gardnerscot/ollamachat-mcp-bridge) is running on `127.0.0.1:3100`
2. Open `index.html` in a browser, or deploy to any static host
3. The dashboard connects to the bridge automatically

## Custom Tools

Custom tools use shell commands with `${param_name}` substitution:

```
Name: hello
Command: echo Hello ${name}! The time is $(date +%H:%M).
Schema: {"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}
```

## Built With

- Tailwind CSS
- Vanilla JavaScript
- Proverbs ⚒️
