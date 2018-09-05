// array of popup id`s. for add popup just add id in array. for open popup add attribute data-title=${namePopup} to btn or etc.
const popupMapping = ['imprint', 'privacy', 'contact', 'enquiry','recommend'];

function closeModal() {
    Custombox.modal.close();
}

popupMapping.forEach(namePopup => {
    const popup = new Custombox.modal({
        content: {
            effect: 'fadein',
            target: `#${namePopup}`,
            delay: 50
        },
        loader: {
            active: false,
        }
    });

    $(`[data-title=${namePopup}]`).click(function () {
        popup.open();
    });
    //need to click on left and right padding close popup (1)
    $(`#${namePopup}`).click(closeModal);
});
//click on close button
$('.close-button').click(closeModal);

//fix to (1) don`t close popup at click on itself (2)
$('.p-0.panel').click(function (e) {
    return false;
});

//fix to (2) checkbox can be checked
$('input[type=checkbox], .form-check-label').click(function (event) {
    event.stopPropagation();
});
