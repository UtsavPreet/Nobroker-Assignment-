let dataID;
let source;
$(document).ready(function () {
    // Sortable.create(progress, {     group: "assignment",     filter:
    // '.removeCard',     onFilter: (evt) => {         let el = evt.item;         el
    // && el             .parentNode             .removeChild(el);     } }); let
    // todo = document.getElementById("todo"); Sortable.create(todo, {     group:
    // "assignment",     filter: '.removeCard',     onFilter: (evt) => {         let
    // el = evt.item;         el && el             .parentNode .removeChild(el); }
    // }); let done = document.getElementById("done"); Sortable.create(done, {
    // group: "assignment",     filter: '.removeCard',   onFilter: (evt) => {  let
    // el = evt.item;         el && el  .parentNode .removeChild(el);     } });
    bind('.mainContainer .modalContainer .modalButtonContainer .modalButton', () => {
        hidePopup();
    })
    bind('.contentAdd', () => {
        let content = $('.modalContent')
            .val()
            .trim();
        hidePopup();
        switch (dataID) {
            case 'todo':
                $('#todo').append('<div class="card" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCard" class="removeCard"' +
                        '></div>');
                break;
            case 'progress':
                $('#progress').append('<div class="card" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCard" class="removeCard"' +
                        '></div>');
                break;
            case 'done':
                $('#done').append('<div class="card" draggable="true" ondragenter="dragenter(event)" ondragstart="dragstart(event)"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCard" class="removeCard"' +
                        '></div>')
        }

    })
})

function launchPopup(targetElement) {
    dataID = $(targetElement).data("id")
    $('.overlay').show();
    $('.modalContainer').show();
}

function hidePopup() {
    $('.overlay').hide();
    $('.modalContainer').hide();
    $('.modalContainer .modalContent').val('');
}



function isbefore(a, b) {
    if (a.parentNode == b.parentNode) {
        for (var cur = a; cur; cur = cur.previousSibling) {
            if (cur === b) { 
                return true;
            }
        }
    }
    return false;
} 

function dragenter(e) {
    if (isbefore(source, e.target)) {
        e.target.parentNode.insertBefore(source, e.target);
    }
    else {
        e.target.parentNode.insertBefore(source, e.target.nextSibling);
    }
}

function dragstart(e) {
    source = e.target;
    e.dataTransfer.effectAllowed = 'move';
}