import React, { Component } from 'react';

export default class Text extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

class Money extends Component {
    toThousands = (number) => {
        if (isNaN(number)) { return 0; }

        let num = (number || 0).toString();
        let result = '';
        let decimals = '';
        if (num.split('.')[1]) {
            decimals = num.split('.')[1];
            num = num.replace(/\.\d*/, '');
        }

        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }

        if (num) { result = num + result; }

        if (decimals) {
            return result + '.' + decimals;
        }
        return result;
    }
    render() {
        return (
            <div className="d-il test2thousands">
                {this.toThousands(this.props.value || '')}
            </div>
        );
    }
}

Text.Money = Money;
