import React, { Component } from 'react'

export default class BottomTool extends Component {
    constructor() {
        super()
        this.state = {
            type: 'A',
            page: 'index'
        }
    }
    handleChange(e) {
        const { type, page } = e.target.dataset;
        console.log(type, page);
        if (type)
            this.setState({
                type
            }, this.props.onAction && this.props.onAction({ type, page: this.state.page }))
        else
            this.setState({
                page
            }, this.props.onAction && this.props.onAction({ page, type: this.state.type }))
    }
    render() {
        const { onSave, onInit } = this.props
        return (
            <div className="drag-bottom bg-black c-text-w">
                <div className="">
                    <span>模板类型：</span>
                    <div className="d-il">
                        <input
                            type="radio"
                            data-type="A"
                            onChange={(e) => this.handleChange(e)}
                            name='type'
                            id="pa"
                            defaultChecked />
                        <label htmlFor="pa" className="d-il">A</label>
                        <input
                            type="radio"
                            data-type="B"
                            onChange={(e) => this.handleChange(e)}
                            name='type'
                            id="pb" />
                        <label htmlFor="pb" className="d-il">B</label>
                        <input
                            type="radio"
                            data-type="C"
                            onChange={(e) => this.handleChange(e)}
                            name='type'
                            id="pc" />
                        <label htmlFor="pc" className="d-il">C</label>
                    </div>
                </div>
                <div className="mt8">
                    <span>页面：</span>
                    <div className="d-il">
                        <input
                            type="radio"
                            data-page="index"
                            onChange={(e) => this.handleChange(e)}
                            name='page'
                            id="index"
                            defaultChecked />
                        <label htmlFor="index" className="d-il">首页</label>
                        <input
                            type="radio"
                            data-page="article"
                            onChange={(e) => this.handleChange(e)}
                            name='page'
                            id="article" />
                        <label htmlFor="article" className="d-il">文章页</label>
                    </div>
                </div>
                <div className="">
                    <button className="btn c-text-w bg-blue ptb4 plr16 mr8 mt16" onClick={onSave}>保存</button>
                    <button className="btn c-text-w bg-blue ptb4 plr16" onClick={onInit}>初始化</button>
                </div>
            </div>
        )
    }
}
