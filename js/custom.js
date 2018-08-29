function toogler(fun1, fun2) {
    let flag = false;
    return function () {
        flag = !flag;
        return flag ? fun1() : fun2();
    }
}

function isMobileScreen() {
    const breakpoint = 768;
    const scr_w = $(window).outerWidth();
    return scr_w < breakpoint;
}