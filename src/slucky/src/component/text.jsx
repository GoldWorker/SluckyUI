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
        let num = (number || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }
    render() {
        return (
            <div className="d-il">
                {this.toThousands(this.props.value || '')}
            </div>
        );
    }
}

Text.Money = Money;
