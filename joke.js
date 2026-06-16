const webhook = process.env.WEBHOOK_URL;

async function sendJoke() {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?safe-mode"
    );

    const joke = await res.json();

    let content;

    if (joke.type === "single") {
      content = `<:glasses:1515172284665561178> **Joke of the Day**\n\n${joke.joke}`;
    } else {
      content =
        `<:glasses:1515172284665561178> **Joke of the Day**\n\n` +
        `${joke.setup}\n\n||${joke.delivery}||`;
    }

    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    });
  } catch (err) {
    console.error("Failed to send joke:", err);
  }
}

sendJoke();
