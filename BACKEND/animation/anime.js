anime({
    targets: 'input.money',
    value: [0, 1000],
    round: 1,
    easing: 'easeInOutExpo'
});

let animation = anime({
    targets: '.circle',
    translateX: 300,
    delay: anime.stagger(100, { from: 'center' }),
    direction: 'alternate',
    loop: true,
})

document.getElementById('pause')
        .addEventListener('click', () => animation.pause())
document.getElementById('play')
        .addEventListener('click', () => animation.play())

        anime({
            targets: '#draw path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 250,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
          });

var myaudio = document.getElementById("sound").autoplay = true;