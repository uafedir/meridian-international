const imprintModal = new Custombox.modal({
    content: {
        effect: 'fadein',
        target: '#imprint',
        delay: 50
    },
    loader: {
        active: false,
    },
    onClose: closeModal
});
const privacyModal = new Custombox.modal({
    content: {
        effect: 'fadein',
        target: '#privacy',
        delay: 50
    },
    loader: {
        active: false,
    }
});
const contactModal = new Custombox.modal({
    content: {
        effect: 'fadein',
        target: '#contact',
        delay: 50
    },
    loader: {
        active: false,
    }
});


$('#footer [data-title=imprint]').click(function () {
    $('body').addClass('no-scroll');
    imprintModal.open();

});

$('#footer [data-title=privacy]').click(function () {
    privacyModal.open();
    $('body').addClass('no-scroll');
});

$('#footer [data-title=contact]').click(function () {
    contactModal.open();
    $('body').addClass('no-scroll');
});

function closeModal() {
    Custombox.modal.close();
    $('body').removeClass('no-scroll');
}

$('#imprint').click(closeModal);

$('#privacy').click(closeModal);

$('#contact').click(closeModal);

$('.close-button').click(closeModal);

$('.p-0.panel').click(function () {
    return false;
});

document.addEventListener('custombox:overlay:close', function() {
    $('body').removeClass('no-scroll');
});