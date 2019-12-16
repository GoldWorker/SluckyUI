export default class Lib { }

const _UNIT = {
    Bytes: 1,
    Kb: 1024,
    M: 1024 * 1024,
    G: 1024 * 1024 * 1024,
    T: 1024 * 1024 * 1024 * 1024
};

Lib.toThousands = (number) => {
    let num = (number || 0).toString(),
        result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
};

Lib.transfer2UnitAuto = (num = 0, fixed = 2) => {
    for (const key in _UNIT) {
        if (_UNIT.hasOwnProperty(key)) {
            const item = _UNIT[key];
            //进位
            const isCarry = (num / item).toFixed(0).length <= 4;
            if (isCarry) {
                const res = (num / item).toFixed(fixed);
                //舍去
                const isRounding = !!parseInt(res.slice(-fixed));
                return isRounding ? `${res}${key}` : `${(num / item).toFixed(0)}${key}`;
            }
        }
    }
    const res = (num / _UNIT.T).toFixed(fixed);
    const isRounding = !!parseInt(res.slice(-fixed));
    return isRounding ? `${res}T` : (num / _UNIT.T).toFixed(0);
};

Lib.transfer2Unit = (num = 0, unit = 'G', fixed = 2, isShowUnit = true) => {
    if (!num) {
        return num + unit;
    }
    if (!_UNIT[unit]) {
        return num + (isShowUnit ? 'Bytes' : '');
    }
    return (num / _UNIT[unit]).toFixed(fixed) + (isShowUnit ? unit : '');
};
