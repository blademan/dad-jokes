const jokeDiv = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const img = document.querySelector(".jokeImg");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: `application/json`,
    },
  };

  const res = await fetch(`https://icanhazdadjoke.com`, config);

  const data = await res.json();
  jokeDiv.innerHTML = data.joke;
}
