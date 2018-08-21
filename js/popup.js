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
    $(`#${namePopup}`).click(closeModal);
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
$('.close-button').click(closeModal);

$('.p-0.panel').click(function (e) {
    return false;
});
//
// document.addEventListener('custombox:overlay:open', function () {
// });
//
// document.addEventListener('custombox:overlay:close', function () {
// });

