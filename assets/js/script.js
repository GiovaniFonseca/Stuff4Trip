/*jshint esversion: 6 */

/**
 * Function that update the local storage;
 */
function updateStorage() {
    const items = document.querySelectorAll('.content input[type="text"]');
    let items_array = [];
    for (const item of items) {
        items_array.push(item.getAttribute('value'));
    }
    let myObj = {
        items: items_array
    };
    localStorage.setItem('packingStuffList', JSON.stringify(myObj));
}

/**
 * Function that prevents duplicate entries in the packing list
 * @param {} stuff: string for new item being added
 * @returns boolean/string: true if an item is found, false if no matching item found
 */
function isItemAlreadyThere(stuff) {
    const items = document.querySelectorAll('.content input[type="text"]');
    for (const item of items) {
        if (item.getAttribute('value') === stuff) {
            return true;
        }
    }
    return false;
}

/**
 * function that checks if form has erros
 * @param {*} stuff: string for new item being added
 * @returns error message string or false
 */
function hasErrors(stuff) {
    if (!stuff) {
        return "Please enter something to add to your list stuff.";
    } else if (isItemAlreadyThere(stuff)) {
        return `You already have ${stuff} in your list.`;
    } else {
        return false;
    }
}

/**
 * Function that adds new element to the page that allows user to edit/delete item
 * @param {*} stuff: string of packing list item
 * Appends a new HTML element  of following structure:
 * <div class="stuff">
 *   <div class="content">  
 *       <input type="text" class="text" value="My new stuff to bring" readonly>         
 *   </div>
 *   <div class="actions">
 *       <button class="edit">Edit</button>
 *       <button class="delete">Delete</button>
 *   </div>           
 * </div>
 */
function createNewItem(stuff) {
    // outer element that house all packing list items:
    const stuffElement = document.getElementById('stuff-trip');

    // create div.stuff outer element
    const stuff_el = document.createElement('div');
    stuff_el.classList.add('stuff');

    // create div.content child element
    const stuff_content = document.createElement('div');
    stuff_content.classList.add('content');
    stuff_el.appendChild(stuff_content);

    // create read only input element that goes inside div.content element
    const stuff_input = document.createElement('input');
    stuff_input.classList.add('text');
    stuff_input.type = 'text';
    stuff_input.setAttribute('value', stuff);
    stuff_input.setAttribute('readonly', 'readonly');
    stuff_content.appendChild(stuff_input);

    // create div.actions elemet for edit/delete actions;
    const actionsElement = document.createElement('div');
    actionsElement.classList.add('actions');

    // create Edit button;
    const editElement = document.createElement('button');
    editElement.classList.add('edit');
    editElement.innerHTML = 'Edit';
    actionsElement.appendChild(editElement);

    // create Delete button;
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('delete');
    deleteElement.innerHTML = 'Delete';
    actionsElement.appendChild(deleteElement);

    // appending actionsElement to the stuff_el;
    stuff_el.appendChild(actionsElement);

    // appending stuff_el to the stuffElement;
    stuffElement.appendChild(stuff_el);

    // add event listeners to new Edit/ Delete actions;
    editElement.addEventListener('click', function () {
        // if edit, remove read only so user can change things and save 
        if (editElement.innerText.toLowerCase() == 'edit') {
            stuff_input.removeAttribute('readonly');
            stuff_input.focus();
            editElement.innerText = 'Save';
        } else {
            // save side of editing, switch back to read only and text back to edit;
            stuff_input.setAttribute('readonly', 'readonly');
            editElement.innerText = 'Edit';
            updateStorage();
        }
    });

    // Add the Delete Event listener;
    deleteElement.addEventListener('click', function () {
        // removing the child 'stuff_el' so we can press delete and remove; 
        stuffElement.removeChild(stuff_el);
        updateStorage();
    });

    // update local storage
    updateStorage();
}

/**
 * function that handles the stuff input form submit
 * @returns new element or error state
 */
function stuffInputHandler(e) {

    // prevent the website from refreshing the page
    e.preventDefault();

    const form = document.getElementById('stuff-form');
    const input = document.getElementById('stuff-input');
    const error = this.document.getElementById('error-message');
    const stuff = input.value;

    // check if any errors
    const form_errors = hasErrors(stuff);
    if (form_errors) {
        error.innerHTML = form_errors;
        input.focus();
        form.classList.add('error');
        return;
    } else {
        form.classList.remove('error');
    }

    // create new element to page with edit/delete handlers
    createNewItem(stuff);

    // clean out the form so user doesn't have to 
    input.value = '';

}

/**
 * function to preload data base on local storage having the 'packingStuffList' that has an array of string in items;
 * ex:
 * {'item' : ['t-shirts', 'pants']}
 */
function preloadInformation() {

    let items = JSON.parse(localStorage.getItem('packingStuffList'));
    if (items !== null && typeof (items.items) !== undefined && items.items.length > 0) {
        for (const item of items.items) {
            createNewItem(item);
        }
    }
}

/**
 * Window load listener
 * see if there are items in local storage and preload page with that
 * add event listener to input form submit
 */
window.addEventListener('load', function () {
    const form = document.getElementById('stuff-form');

    preloadInformation();

    form.addEventListener('submit', function (e) {
        stuffInputHandler(e);
    });
});
 



