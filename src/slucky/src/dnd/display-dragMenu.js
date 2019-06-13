import React, { Component } from 'react'

export default class DragMenu extends Component {
    constructor() {
        super()
        this.state = {
            com: '',
            pos: {
                top: 112,
                left: 56
            }
        }
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
        const { name } = ev.target.dataset;
        ev
            .dataTransfer
            .setData('name', name)
    }

    render() {
        const conf = {
            mainCom: [
                'article', 'nav', 'about', 'articleDetail'
            ],
            decCom: [
                'todoList', 'weiboHotList'
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
                    className="bg-black c-text-w p-a drag-menu shadow"
                    style={this.state.pos}
                    onDrag={(e) => this.handleChangePos(e)}>

                    <div className="menu-nd">
                        <div className="drag-menu bg-black c-text-w p-a ta-c">
                            <span className="lh56">控制</span>
                        </div>
                        <div className="drag-menu bg-black c-text-w p-a ta-c">
                            <div className="p-r d-n list-container">
                                <ul className="paper bg-black p8">
                                    {conf
                                        .mainCom
                                        .map((item, index) => {
                                            return (
                                                <li
                                                    data-name={item}
                                                    onDragStart={(e) => this.handleComDrag(e)}
                                                    key={item}
                                                    className="ptb4"
                                                    draggable="true">{item}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                            <span className="lh56">主要</span>
                        </div>
                        <div className="drag-menu bg-black c-text-w p-a">
                            <div className="drag-menu bg-black c-text-w p-a ta-c">
                                <div className="p-r d-n list-container">
                                    <ul className="paper bg-black plr8 ptb16">
                                        {conf
                                            .decCom
                                            .map((item, index) => {
                                                return (
                                                    <li
                                                        data-name={item}
                                                        onDragStart={(e) => this.handleComDrag(e)}
                                                        key={item}
                                                        className="ptb4"
                                                        draggable="true">{item}</li>
                                                )
                                            })}
                                    </ul>
                                </div>
                                <span className="lh56">装饰</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
