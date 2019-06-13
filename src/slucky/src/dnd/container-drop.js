import React, {Component} from 'react';
import util from './util'

const ContainerDrop = (WrappedComponent, data) => class ContainerDrop extends Component {
    constructor() {
        super()
        this.state = {
            com: WrappedComponent
        }
    }
    handleDragOver(ev) {
        //这保证 handleDroZoneDrop可以被调用
        ev.preventDefault();
    }

    handleDragEnter(ev) {
        // console.log(ev);
        ev.dataTransfer.dropEffect = "copy"
    }

    handleDragLeave(ev) {
        // console.log(ev);
    }

    handleDrop(ev) {
        // console.log(ev.target);
        console.log(ev.dataTransfer.getData('name'));
        const comName = ev
            .dataTransfer
            .getData('name') || '';

        util.onLoadCom(comName, (com) => {
            this.setState({
                com
            })
        })
        
        data.onAction && data.onAction(comName)
    }

    render() {
        return (
            <div
                className="bor b-yellow-d"
                onDragOver={this
                .handleDragOver
                .bind(this)}
                onDragEnter={this
                .handleDragEnter
                .bind(this)}
                onDragLeave={this
                .handleDragLeave
                .bind(this)}
                onDrop={this
                .handleDrop
                .bind(this)}>
                {/* <WrappedComponent data={data}/> */}
                {console.log('STATE_COM',WrappedComponent)}
                {this.state.com && React.createElement(this.state.com, {data})}
            </div>
        )
    }
}

export default ContainerDrop
