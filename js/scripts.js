//newitem() to work with the button on click
function newItem() {

    // 1. Add a new item to the list of items and add (VAL() to attach a vale(number) to the input element):
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(text);

    if (inputValue === '') {
        alert("You must write something, please!");
    } else {
        let list = $('#list');
        list.append(li);
    }


    // 2. Crossing  item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }
    // 2.5 double click any li to (strike out) the li
    li.on('dblclick', crossOut);

    // 3. Adding the delete button {"X"}:
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);


    crossOutButton.on('click', deleteListItem);

    // 3. Adding the "class" delete "DISPLAY: NONE" from the file css:
    function deleteListItem() {
        li.addClass('delete');
    }

    // 4. Reordering the items on the li list everytime you hit enter to show the different list items:
    $('#list').sortable();

}
