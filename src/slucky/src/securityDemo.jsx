import React, { Component } from 'react';
import { Input } from './component/input';

export default class SecurityDemo extends Component {
    constructor() {
        super();
        this.state = {
            xss: '<div class="btn-n" onclick="alert("xss")">asdf<script type="text/javascript">eval("alert(123)")</script></div>'
        };
    }
    componentDidMount() {
        this.refs.xss.innerHTML = this.state.xss;
    }
    haneldChangeXSS(v) {
        this.setState({ xss: v });
        this.refs.xss.innerHTML = v;
    }
    render() {
        return (
            <div>
                <Input onChange={(v) => this.haneldChangeXSS(v)} />
                {document.innerHtml = this.state.xss}
                <div id="xss" ref="xss"></div>
            </div>
        );
    }
}
