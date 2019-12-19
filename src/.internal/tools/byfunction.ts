class byfunction {

    static debounce(func: Function, wait: number) {
        let timeout = null;
        return function () {
            if (timeout !== null)
                clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        }
    }

    static throttle(func: Function, delay: number) {
        let timer = null;
        let startTime = Date.now();
        return function () {
            const curTime = Date.now();
            const remaining = delay - (curTime - startTime);
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            if (remaining <= 0) {
                func.apply(context, args);
                startTime = Date.now();
            } else {
                timer = setTimeout(func, remaining);
            }
        }
    }
}

export default byfunction;