
/**
 * Creating an event and function
 * Getting the elements from the html, putting them in variable
 */

window.addEventListener('load', () => {
    const form = document.getElementById('stuff-form');
    const input = document.getElementById('stuff-input');
    const stuffElement = document.getElementById('stuff-trip');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent the website from refreshing the page

       const stuff = input.value;
       if (!stuff) {
            alert('please fill out the stuff'); //creating an if statement for the user to fill in the form and not leave it blank
            return; 
       }
       
       /**
        * creating elements to the page 
        */
       
       const stuff_el = document.createElement('div'); // creating a div element 
       stuff_el.classList.add('stuff'); // adding a class to the div

       const stuff_content = document.createElement('div'); // creating a div element 
       stuff_content.classList.add('content'); // adding a class to the div

       stuff_el.appendChild(stuff_content); // appending stuff_content to the stuff_el

       const stuff_input = document.createElement('input'); // creating an input element
       stuff_input.classList.add('text'); // defining the class as text 
       stuff_input.type = 'text'; // difining the type as text
       stuff_input.value = stuff; // 
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
        * creating an Event and fuction to the edit button 
        */

       editElement.addEventListener('click', () => {
        if (editElement.innerText.toLowerCase() == 'edit') {
            stuff_input.removeAttribute('readonly');
            stuff_input.focus();
            editElement.innerText = 'Save';
        } else {
            stuff_input.setAttribute('readonly', 'readonly');
            editElement.innerText = 'Edit';
        }
       });

       /**
        * creating an Event to the Delete button
        */

       deleteElement.addEventListener('click', () => {
            stuffElement.removeChild(stuff_el);
       });

    });
});

