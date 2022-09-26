const fetchSvg = (image) => {
    fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
            const span = document.createElement('span');
            span.innerHTML = response;
            const inlineSvg = span.getElementsByTagName('svg')[0];
            image.parentNode.replaceChild(inlineSvg, image);
            return true;
        })
};


/*==== SCROLL ====*/

window.sr = ScrollReveal({reset: true});

sr.reveal('.container')
sr.reveal('.distritos', {duration: 1500})
sr.reveal('.container-msg', {duration: 1500})
sr.reveal('.top_1' , {duration: 1500})
sr.reveal('.hamburger-menu' , {duration: 300})
