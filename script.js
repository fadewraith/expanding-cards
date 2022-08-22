const panels = document.querySelectorAll('.panel');


// console.warn(panels); // will give the output of NodeList
panels.forEach((panel) => {
    // console.warn(panel);
    // take each panel and add an event listener
    panel.addEventListener('click', () => {
        // classList gives the list of classes and it has methods also
        removeActiveClasses()
        panel.classList.add('active')
    });
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}