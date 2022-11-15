
/**
 * Getting the elements from the html
 */

window.addEventListener('load', () => {
    const form = document.getElementById('stuff-form');
    const input = document.getElementById('stuff-input');
    const stuffElement = document.getElementById('stuff-trip')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('submit form')
    })
})

