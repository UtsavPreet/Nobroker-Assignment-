let dataID;
$(document)
    .ready(function () {
        let progress = document.getElementById("progress");
        Sortable.create(progress, {
            group: "assignment",
            filter: '.removeCard',
            onFilter: (evt) => {
                let el = evt.item;
                el && el
                    .parentNode
                    .removeChild(el);
            }
        });
        let todo = document.getElementById("todo");
        Sortable.create(todo, {
            group: "assignment",
            filter: '.removeCard',
            onFilter: (evt) => {
                let el = evt.item;
                el && el
                    .parentNode
                    .removeChild(el);
            }
        });
        let done = document.getElementById("done");
        Sortable.create(done, {
            group: "assignment",
            filter: '.removeCard',
            onFilter: (evt) => {
                let el = evt.item;
                el && el
                    .parentNode
                    .removeChild(el);
            }
        });
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
                    $('#todo').append('<div class="card"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCar' +
                        'd" class="removeCard"></div>')
                    break;
                case 'progress':
                    $('#progress').append('<div class="card"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCar' +
                        'd" class="removeCard"></div>')
                    break;
                case 'done':
                    $('#done').append('<div class="card"><div class="content">' + content + '</div><img src="../images/delete-button.svg" alt="removeCar' +
                        'd" class="removeCard"></div>')
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