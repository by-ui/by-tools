class data {

    static deepClone<T>(obj: T): T {
        if (obj == null || typeof obj != 'object') return obj;
        else {
            if (obj instanceof Date) {
                let copy = new Date();
                copy.setTime(obj.getTime());
                return <T>(<unknown>copy);
            }

            if (obj instanceof Array) {
                const len = obj.length;
                let copy = new Array<T>();
                for (let i = 0; i < len; ++i) {
                    copy[i] = data.deepClone(obj[i]);
                }
                return <T>(<unknown>copy);
            }

            if (obj instanceof Object) {
                let copy: T = <T>{};
                for (let attr in obj) {
                    if ((obj as Object).hasOwnProperty(attr)) copy[attr] = <T[Extract<keyof T, string>]>data.deepClone(obj[attr]);
                }
                return copy;
            }
        }

        throw new Error('Unable to copy this object');
    }
}

export default data;