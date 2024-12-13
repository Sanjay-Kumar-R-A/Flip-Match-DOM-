const emojis = ["🦄", "🦄", "🍎", "🍎", "🌟", "🌟", "🐶", "🐶", "🍓", "🍓", "🐱", "🐱", "🍕", "🍕", "🌺", "🌺"];
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement('div')
  box.className = 'item';
  box.innerHTML = shuf_emojis[i]

  box.onclick = function() {
    this.classList.add('boxopen')

    // Play sound effect on click
    const clickSound = new Audio('./assets/click.mp3');
    clickSound.play();

    setTimeout(function() {
      if (document.querySelectorAll('.boxopen').length > 1) {
        if (document.querySelectorAll('.boxopen')[0].innerHTML ==
          document.querySelectorAll('.boxopen')[1].innerHTML) {
          // Play match sound effect
          const matchSound = new Audio('./assets/correct-match.mp3');
          matchSound.play();

          document.querySelectorAll('.boxopen')[0].classList.add('boxMatch')
          document.querySelectorAll('.boxopen')[1].classList.add('boxMatch')
          document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
          document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')
          if (document.querySelectorAll('.boxMatch').length == emojis.length) {
            // Play win sound effect
            const winSound = new Audio('./assets/vicory.mp3');
            winSound.play();
            alert('Congratulations you won!!!!');
          }
        } else {
          // Play no-match sound effect
          const noMatchSound = new Audio('./assets/wrong-match.mp3');
          noMatchSound.play();

          document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
          document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')
        }
      }
    }, 500);
  }

  document.querySelector(".game").appendChild(box);
}