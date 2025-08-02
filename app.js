document.addEventListener("DOMContentLoaded", function () {
  const drums = document.querySelectorAll(".drum");
  const audioElements = {
    w: document.getElementById("w-audio"),
    a: document.getElementById("a-audio"),
    s: document.getElementById("s-audio"),
    d: document.getElementById("d-audio"),
    " ": document.getElementById("space-audio"),
  };

  function playDrum(key) {
    const audio = audioElements[key];
    const button = document.getElementById(key === " " ? "space" : key);

    if (audio && button) {
      audio.currentTime = 0;
      audio.play();
      button.classList.add("active");
      setTimeout(() => {
        button.classList.remove("active");
      }, 150);
    }
  }

  drums.forEach((drum) => {
    drum.addEventListener("click", function () {
      const key = this.id === "space" ? " " : this.id;
      playDrum(key);
    });
  });

  document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (audioElements[key]) {
      event.preventDefault();
      playDrum(key);
    }
  });

  drums.forEach((drum) => {
    drum.addEventListener("touchstart", function (e) {
      e.preventDefault();
      const key = this.id === "space" ? " " : this.id;
      playDrum(key);
    });
  });
});
