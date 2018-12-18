import React, {Component} from 'react'
import HighorderMessage from "./message/highorder-message";
import Slidebar from "./slidebar";

export default class Global extends Component {
    render() {
        return (
            <div>
                <Slidebar/>
                <HighorderMessage/>
            </div>
        )
    }
}
