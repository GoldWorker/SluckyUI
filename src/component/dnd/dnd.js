import React, {Component} from 'react'
import util from './util'
import BottomTool from './display-bottomTool'
export default class dnd extends Component {
    constructor() {
        super()
        this.state = {
            com: '',
            pos: {
                top: 200,
                left: 0
            },
            dragStatus: true
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
            this.setState({com})
        })
    }

    handleDragStart(ev) {
        console.log(ev.target);
        ev
            .dataTransfer
            .setData('test', '123')
        ev.dataTransfer.effectAllowed = "copy"
    }

    handleClick() {
        console.log(this.context);
        console.log(this.state.com);
        require.ensure([], (require) => {
            var article = require('../../components/nav/navNormalize.js').default
            this.setState({com: article})
        })
    }

    handleChangePos(event) {
        const e = event || window.event;

        if (e.clientX > 0 && e.clientY > 0 && e.target.tagName != 'LI') {
            this.setState({
                pos: {
                    top: e.clientY - 28,
                    left: e.clientX - 28
                }
            })
        }
    }

    handleComDrag(ev) {
        console.log(ev.target.dataset.name);
        const {name} = ev.target.dataset;
        ev
            .dataTransfer
            .setData('name', name)
    }

    render() {
        const conf = {
            mainCom: [
                'article', 'comment', 'nav', 'about'
            ],
            decCom: [
                'menu', 'todoList', 'about'
            ],
            color: [
                'black', 'blue'
            ],
            bgImage: ['']
        }
        return (
            <div>
                <div
                    draggable='true'
                    className="bg-grey p-a drag-menu"
                    style={this.state.pos}
                    onDrag={(e) => this.handleChangePos(e)}>
                    <div className="menu-nd">
                        <div className="drag-menu bg-grey p-a">
                            <div className="p-r d-n list-container">
                                <ul className="list paper">
                                    {conf
                                        .mainCom
                                        .map((item, index) => {
                                            return (
                                                <li
                                                    data-name={item}
                                                    onDragStart={(e) => this.handleComDrag(e)}
                                                    key={item}
                                                    draggable="true">{item}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="drag-menu bg-grey p-a">
                            <div className="drag-menu bg-grey p-a">
                                <div className="p-r d-n list-container">
                                    <ul className="list paper">
                                        {conf
                                            .decCom
                                            .map((item, index) => {
                                                return (
                                                    <li
                                                        data-name={item}
                                                        onDragStart={(e) => this.handleComDrag(e)}
                                                        key={item}
                                                        draggable="true">{item}</li>
                                                )
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="drag-menu bg-grey p-a">3</div>
                    </div>
                </div>
                <div draggable="true" onDragStart={() => this.handleDragStart()}>123</div>

                {this.state.com && React.createElement(this.state.com)}
                <div className='survey-canvas col-md-9'>
                    <div
                        className={'drop-zone well well-drop-zone'}
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
                        Drag and drop a module from the left
                    </div>
                </div>
                <BottomTool/>
            </div>
        )
    }
}