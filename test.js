document.body.addEventListener('dragstart', event => event.preventDefault())

new fullpage('#fullpage', {
    navigation: true,
    navigationTooltips: ['Main', 'Skills', 'Projects'],
    anchors: ['1', '2', '3'],
    scrollingSpeed: 1000
})

Array.from(document.querySelectorAll('.skill')).forEach(ar => {
    ar.addEventListener('click', e => {
        switch (e.target.getArribute('skill')){
            case 'C++':
                document.querySelector('#skill-desc .desc').innerHTML = '<div class="progress" percent="70"></div><br/>저의 주 언어 C++ 입니다. '
                break
            case 'HTML':
                document.querySelector('#skill-desc .desc').innerHTML = '<div class="progress" percent="100"></div><br/>HTML은 물론 EJS, JSX 등의 언어들도 합니다 ㅎㅎ'
        }
    })
})