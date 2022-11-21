
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
       stuff_input.classList.add('text'); // adding the class of text
       stuff_input.type = 'text'; // defining the type as text
       stuff_input.value = stuff; // defining the input.value is equal to the stuff we write in the web 
       stuff_input.setAttribute('readonly', 'readonly'); // setting as readonly, so the user cannot edit

       stuff_content.appendChild(stuff_input); // appending stuff_input to the stuff_content

       const actionsElement = document.createElement('div');  // creating a div element 
       actionsElement.classList.add('actions'); // adding a class to the div

       const editElement = document.createElement('button'); // creating the button element
       editElement.classList.add('edit'); // addin the class of edit 
       editElement.innerHTML = 'Edit'; // set the innerHTML as Edit 

       const deleteElement = document.createElement('button'); // creating the button element
       deleteElement.classList.add('delete'); // addin the class of edit 
       deleteElement.innerHTML = 'Delete'; // set the innerHTML as Delete

       actionsElement.appendChild(editElement); // appending editElement to the actionsElement
       actionsElement.appendChild(deleteElement); // appending deleteElement to the actionsElement

       stuff_el.appendChild(actionsElement); // // appending actionsElement to the stuff_el

       stuffElement.appendChild(stuff_el); // // appending stuff_el to the stuffElement

       input.value = ''; // settiing the input.value igual to "", to prevent any issue 

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

