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
        bind('.done', () => {
            launchPopup();
        })
        bind('.progress', () => {
            let content = launchPopup();

        })
        bind('.todo', () => {
            launchPopup();
        })
        bind('.mainContainer .modalContainer .modalButtonContainer .modalButton', () => {
            hidePopup();
        })
        bind('.contentAdd', (ui) => {
            let content = $('.modalContent')
                .val()
                .trim();
            hidePopup();
            $('#todo').append('<div class="card"><div class="content">' + content + '</div><img src="http://moziru.com/images/red-cross-clipart-3.png" alt="removeCar' +
                    'd" class="removeCard"></div>')

        })
    })

function launchPopup() {
    $('.overlay').show();
    $('.modalContainer').show();
}
function hidePopup() {
    $('.overlay').hide();
    $('.modalContainer').hide();
    $('.modalContainer .modalContent').val('');
}