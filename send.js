const webhook = process.env.WEBHOOK_URL;

fetch(webhook, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    content: "<@628051595883708446> watch aot"
  })
});
