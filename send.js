const webhook = process.env.WEBHOOK_URL;

fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: "<@628051595883708446> rewatch aot\n<@&1514403533976240230> listen to https://open.spotify.com/playlist/6GzztqV8FWjn5l8Tf7ycmf?si=fIzcqfpiS02DZg0xtht0kA"
  })
});
