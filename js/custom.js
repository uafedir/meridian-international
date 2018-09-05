function toogler(fun1, fun2) {
    let flag = false;
    return function () {
        flag = !flag;
        return flag ? fun1() : fun2();
    }
}

