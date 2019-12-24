import React, { Component } from 'react';
import Input from 'slucky/src/component/input';

export default class SecurityDemo extends Component {
    constructor() {
        super();
        this.state = {
            xss: ''
        };
    }

    componentDidMount() {
        this.refs.xss.innerHTML = this.state.xss;

        this.refs.xss1.innerHTML = this.getParams('name');
    }

    haneldChangeXSS(v) {
        this.setState({ xss: v });
        this.refs.xss.innerHTML = v;
    }

    getParams(key) {
        const reg = new RegExp(`(&|^)${key}=([^&]*)($|&)`);
        const res = window.location.search.substr(1).match(reg);
        if (res != null) {
            return unescape(res[2]);
        }
        return null;
    }

    requestPost() {
        const xhr = new XMLHttpRequest();
        const url = 'http://www.brandf.cn:8010/article';
        const data = JSON.stringify({
            content: 'csrf23333123123',
            id: '',
            title: 'csrf23333123123'
        });
        xhr.open('POST', url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.response);
            }
        };
    }

    haneldChangeXSS(v) {
        this.setState({ xss: v });
        // this.refs.xss.innerHTML = v;
    }
    render() {
        return (
            <div>
                <Input maxLength={300} onChange={(v) => this.haneldChangeXSS(v)} />
                {document.innerHtml = this.state.xss}
                <div id="xss" ref="xss"></div>
                <div>
                    <div>getParams</div>
                    wellcome! <div ref="xss1"></div>
                </div>
                {/* <iframe name="steal" className="d-n" ref="csrf">
                    <script>
                        {this.requestPost()}
                    </script>
                </iframe> */}
                {/* <iframe src="http://www.bitzh.edu.cn/" frameborder="0"></iframe> */}
            </div>
        );
    }
}
