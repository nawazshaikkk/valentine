const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>YAY!!! 🎉💖</h1>
    <p>You said YES 😭</p>
  <img src="IMG_2926.PNG" width="200">

  `;
});

