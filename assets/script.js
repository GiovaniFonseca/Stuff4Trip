
/**
 * Getting the elements from the html
 */

window.addEventListener('load', () => {
    const form = document.getElementById('stuff-form');
    const input = document.getElementById('stuff-input');
    const stuffElement = document.getElementById('stuff-trip');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

       const stuff = input.value;
       if (!stuff) {
            alert('please fill out the stuff');
            return;
       }
       
       /**
        * creating elements to the page 
        */
       
       const stuff_el = document.createElement('div');
       stuff_el.classList.add('stuff');

       const stuff_content = document.createElement('div');
       stuff_content.classList.add('content');

       stuff_el.appendChild(stuff_content);

       const stuff_input = document.createElement('input');
       stuff_input.classList.add('text');
       stuff_input.type = 'text';
       stuff_input.value = stuff;
       stuff_input.setAttribute('readonly', 'readonly');

       stuff_content.appendChild(stuff_input);

       const actionsElement = document.createElement('div');
       actionsElement.classList.add('actions');

       const editElement = document.createElement('button');
       editElement.classList.add('edit');
       editElement.innerHTML = 'Edit';

       const deleteElement = document.createElement('button');
       deleteElement.classList.add('delete');
       deleteElement.innerHTML = 'Delete';

       actionsElement.appendChild(editElement);
       actionsElement.appendChild(deleteElement);

       stuff_el.appendChild(actionsElement);

       stuffElement.appendChild(stuff_el);

       input.value = '';

       /**
        * creating an Event and If statement to the edit button 
        */

       editElement.addEventListener('click', () => {
        if (editElement.innerText.toLowerCase() == 'edit') {
            stuff_input.removeAttribute('readonly');
            stuff_input.focus();
            editElement.innerText = 'Save'
        } else {
            stuff_input.setAttribute('readonly', 'readonly');
            editElement.innerText = 'Edit';
        }
       })

       /**
        * creating an Event and If statement to the Delete button
        */

       deleteElement.addEventListener('click', () => {
            stuffElement.removeChild(stuff_el)
       })

    })
})

