const epicMix = [
  "Dear Mama",
  "A Change Is Gonna Come",
  "At Last",
  "One In A Million",
  "ATliens",
  "End Of The Road",
  "Stay",
  "If I Ruled The World",
  "Hard Knock Life",
  "Essence",
  "Big Poppa",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} Great Songs!!!`;

const mixInfo = function (mix) {
  mix.forEach(function(song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
