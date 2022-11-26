
/**
 * Creating an event and function;
 * Getting the elements from the html, putting them in variable;
 */

window.addEventListener('load', function() { // adding an event listener and function so we wait the page to load; 
    const form = document.getElementById('stuff-form'); // getting the stuff-form by id;
    const input = document.getElementById('stuff-input'); // getting the stuff-input by id; 
    const stuffElement = document.getElementById('stuff-trip'); // getting the stuff-trip by id;
    const error = this.document.getElementById('error-message'); 

    form.addEventListener('submit', function(e) { // Adding an event listiner 'submit' and function(event);
        e.preventDefault(); // prevent the website from refreshing the page;

       const stuff = input.value; // putting the input.value into the variable 'stuff';
       if (!stuff) {
           form.classList.add('error');
           error.innerHTML = 'Please, enter something to add to your list.';
           input.focus();
           return;
       } else {
        form.classList.remove('error')
       }
       
       /**
        * creating elements to the page; 
        */
       
       const stuff_el = document.createElement('div'); // creating a div element;
       stuff_el.classList.add('stuff'); // adding a class to the div;

       const stuff_content = document.createElement('div'); // creating a div element;
       stuff_content.classList.add('content'); // adding a class to the div;

       stuff_el.appendChild(stuff_content); // appending stuff_content to the stuff_el;

       const stuff_input = document.createElement('input'); // creating an input element;
       stuff_input.classList.add('text'); // adding the class of text;
       stuff_input.type = 'text'; // defining the type as text;
       stuff_input.value = stuff; // defining the input.value is equal to the stuff we write in the web; 
       stuff_input.setAttribute('readonly', 'readonly'); // setting as readonly, so the user cannot edit;

       stuff_content.appendChild(stuff_input); // appending stuff_input to the stuff_content;

       const actionsElement = document.createElement('div');  // creating a div element;
       actionsElement.classList.add('actions'); // adding a class to the div;

       const editElement = document.createElement('button'); // creating the button element;
       editElement.classList.add('edit'); // adding the class of edit; 
       editElement.innerHTML = 'Edit'; // set the innerHTML as Edit; 

       const deleteElement = document.createElement('button'); // creating the button element;
       deleteElement.classList.add('delete'); // adding the class of edit;
       deleteElement.innerHTML = 'Delete'; // set the innerHTML as Delete;

       actionsElement.appendChild(editElement); // appending editElement to the actionsElement;
       actionsElement.appendChild(deleteElement); // appending deleteElement to the actionsElement;

       stuff_el.appendChild(actionsElement); // // appending actionsElement to the stuff_el;

       stuffElement.appendChild(stuff_el); // // appending stuff_el to the stuffElement;

       input.value = ''; // settiing the input.value igual to "", to prevent any issue; 

       /**
        * creating an Event listener and a Fuction to the edit button;
        */

       editElement.addEventListener('click', function() { // creating an event listener 'click' and function;
        if (editElement.innerText.toLowerCase() == 'edit') { // creating an if statement so we can 'Edit';
            stuff_input.removeAttribute('readonly'); // removing the 'readonly' attribute so we can edit;
            stuff_input.focus(); // setting the focus to the input element, so the cursor will be there if you press 'tab';
            editElement.innerText = 'Save'; // Adding the 'Save' so we can edit and save the text;
        } else {
            stuff_input.setAttribute('readonly', 'readonly'); // seting an atribute 'readonly' so we can back to normal 
            editElement.innerText = 'Edit'; // setting the innerText to 'Edit'
        }
       });

       /**
        * creating an Event Listener and a Function to the Delete button;
        */

       deleteElement.addEventListener('click', function() { // creating an event listener 'clicl' and fucntion;
            stuffElement.removeChild(stuff_el); // removing the child 'stuff_el' so we can press delete and remove;
       });

    });
});

