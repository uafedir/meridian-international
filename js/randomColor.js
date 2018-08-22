const panels = $.makeArray($('.panel:not(.image-panel, .p-0)'));
console.log(panels);
panels.forEach(function (panel) {
        const number = Math.floor((Math.random() * 3));
        switch (number) {
            case 0:
                break;
            case 1:
                panel.classList.add("lighter");
                break;
            case 2:
                panel.classList.add("darker");
                break;
        }
    }
);