class byfunction {

    static debounce(func: Function, wait: number, immediate: boolean = false) {
        let timeout: any;
        return function (this: any) {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
                let callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait)
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(() => {
                    func.apply(context, args)
                }, wait);
            }
        }
    }

    static throttle(func: Function, delay: number) {
        let timer: any;
        let startTime = Date.now();
        return function (this: any) {
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