document.body.addEventListener('dragstart', event => event.preventDefault())

new fullpage('#fullpage', {
    navigation: true,
    navigationTooltips: ['Main', 'Skills', 'Projects'],
    anchors: ['1', '2', '3'],
    scrollingSpeed: 1000
})