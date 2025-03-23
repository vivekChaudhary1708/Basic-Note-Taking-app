let title = document.getElementById('title');
let listEl = document.getElementById('list');
let addButtonEl = document.getElementById('add-btn');

addButtonEl.addEventListener('click', function () {
    let titleText = title.value; // extracting the value from input
    let li = document.createElement('li');

    li.innerText = titleText; // inserting the text inside li from the input value

    listEl.appendChild(li); // append the newly created li

    title.value = ''; // clear the input field

    // remove the li after clicking on it
    li.addEventListener('click', function () {
        li.remove();
    });
});
