async function fetchActivity() {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const activity = await response.json();
  return activity;
}

// async function renderActivity() {
//   const activity = await fetchActivity();
//   console.log(activity);
// }

// fetchActivity(); Demo this to show the response contents. JSON => JavaScript Object Notation.

const boredButton = document.getElementById("bored-button");
const card = document.getElementById("card");

boredButton.addEventListener("click", async () => {
  card.replaceChildren();
  const activity = await fetchActivity();
  for (const [key, value] of Object.entries(activity)) {
    const detail = document.createElement("p");
    detail.innerHTML = key + ": " + value;
    card.appendChild(detail);
  }
});
