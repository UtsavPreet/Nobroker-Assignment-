$(document)
    .ready(function () {
        bind('.mainContainer .useCaseContainer .useCase .buttonContainer .button', () => {
            let text = $('.mainContainer .useCaseContainer .useCase .textBox')
                .val()
                .trim();
            launchPopup(text);
        })
        bind('.mainContainer .modalContainer .modalButtonContainer .modalButton', () => {
            $('.overlay').hide();
            $('.modalContainer').hide();
            $('.modalContainer .modalContent').empty();
        })
        bind('.mainContainer .topBar .bell', () => {
            console.log('tapped');
            let count = $('.count').text().trim();
            $('.count').empty();
            $('.notificationTab .header .count').append(count);
            $('.notificationTab').toggle();
            
        })
    })

function launchPopup(text) {
    $('.overlay').show();
    $('.modalContainer .modalContent').append(text);
    $('.modalContainer').show();
}
