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

// const imprintModal = new Custombox.modal({
//     content: {
//         effect: 'fadein',
//         target: '#imprint',
//         delay: 50
//     },
//     loader: {
//         active: false,
//     }
// });
// const privacyModal = new Custombox.modal({
//     content: {
//         effect: 'fadein',
//         target: '#privacy',
//         delay: 50,
//     },
//     loader: {
//         active: false,
//     }
// });
// const contactModal = new Custombox.modal({
//     content: {
//         effect: 'fadein',
//         target: '#contact',
//         delay: 50
//     },
//     loader: {
//         active: false,
//     }
// });
// $('#footer [data-title=imprint]').click(function () {
//     // scroll = $(window).scrollTop();
//     imprintModal.open();
//     // $('#page').css('top', -1*scroll).css('position', 'relative');
//     // $('body').addClass('no-scroll');
//
// });
//
// $('#footer [data-title=privacy]').click(function () {
//     privacyModal.open();
// });
//
// $('#footer [data-title=contact]').click(function () {
//     contactModal.open();
// });
//
//
// $('#imprint').click(closeModal);
//
// $('#privacy').click(closeModal);
//
// $('#contact').click(closeModal);
//

//fix to (2) checkbox can be checked
$('input[type=checkbox], .form-check-label').click(function (event) {
    event.stopPropagation();
});
//
// document.addEventListener('custombox:overlay:open', function () {
// });
//
// document.addEventListener('custombox:overlay:close', function () {
// });