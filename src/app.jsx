import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavDemo from "./component/navDemo";
import LoadingDemo from "./component/loadingDemo";
import ButtonDemo from "./component/buttonDemo";
import { PopupDemo, Dialog, Toast, ToastTest } from "./component/popupDemo";
import Transfrom3DDemo from "./component/transfrom3DDemo";
import FormDemo from "./component/formDemo";
import ColorDemo from "./component/colorDemo";
import ImageDemo from "./component/imageDemo";
import TableDemo from "./component/tableDemo";
import HighorderArticle from "./component/article/highorder-article";

export default class App extends Component {
    constructor() {
        super()
        this.count = 0
        this.state = {
            toggle: false
        }
    }

    hendleClickToast() {
        this
            .refs
            .toast
            .add(this.count++)
    }

    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        // const portalContainer = document.getElementById('dialog');

        return (
            <div className="d-f">
                <div>
                    <div className="m32 pt32">
                        <span className="fs24">SluckyUI</span>
                        doc For React 1874©
                    </div>
                    {/* <TodoList/> */}
                    <HighorderArticle />
                    
                    <div className="m32">
                        <div className="tab-box-tb w-full">
                            <div className="tab-contrl">
                                <input type="radio" id="tab_1" name="tab" defaultChecked />
                                <label className="mr8" htmlFor="tab_1">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Nav</span>
                                </label>

                                <div className="tab-content w-full">
                                    <NavDemo /> {/* {ReactDOM.createPortal(
                                        <NavDemo/>, portalContainer)} */}
                                </div>

                                <input type="radio" id="tab_3" name="tab" />
                                <label className="mr8" htmlFor="tab_3">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Button</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ButtonDemo />
                                </div>

                                <input type="radio" id="tab_2" name="tab" />
                                <label className="mr8" htmlFor="tab_2">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">NewBanlance</span>
                                </label>
                                <div className="tab-content w-full">
                                    <LoadingDemo />
                                </div>

                                <input type="radio" id="tab_4" name="tab" />
                                <label className="mr8" htmlFor="tab_4">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Popup</span>
                                </label>
                                <div className="tab-content w-full">
                                    <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>
                                        <div>
                                            <p>Your Title</p>
                                            <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,
                                                educates and entertains - wherever you are, whatever your age.Visit BBC News for
                                                up-to-the-minute news, breaking news, video, audio and feature stories. BBC News
                                                provides trusted World and UK news as well as local and ...</div>
                                            <div className="ta-r pt8">
                                                <button
                                                    className="tag-text ptb6 plr16"
                                                    onClick={() => this.setState({ toggle: false })}>cancel</button>
                                                <button className="tag-text ptb6 plr16">ok</button>
                                            </div>
                                        </div>
                                    </Dialog>

                                    <Toast ref="toast" />
                                    <button
                                        className="tag-text ptb6 plr16 m32"
                                        onClick={() => this.setState({ toggle: true })}>OpenDialog</button>
                                    <button
                                        className="tag-text ptb6 plr16 m32"
                                        onClick={() => this.hendleClickToast()}>AddMessage</button>

                                    <div className="pop-box">
                                        <div className="bor-b b-theme pop-toggle plr4">
                                            <span className="c-theme">?</span>
                                            <div className="pop-main-r pl8">
                                                <div className="pop-content p24 bg-b ta-l shadow fs14">
                                                    <pre className="c-text-w fs18">Title</pre>
                                                    <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                                                    <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                                                    <pre className="c-text-w">TV, radio and a whole lot more. The BBC informs</pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <input type="radio" id="tab_5" name="tab" />
                                <label className="mr8" htmlFor="tab_5">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Transfrom3D</span>
                                </label>
                                <div className="tab-content w-full">
                                    <Transfrom3DDemo />
                                </div>

                                <input type="radio" id="tab_6" name="tab" />
                                <label className="mr8" htmlFor="tab_6">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Form</span>
                                </label>
                                <div className="tab-content w-full">
                                    <FormDemo />
                                </div>

                                <input type="radio" id="tab_7" name="tab" />
                                <label className="mr8" htmlFor="tab_7">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Color</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ColorDemo />
                                </div>

                                <input type="radio" id="tab_8" name="tab" />
                                <label className="mr8" htmlFor="tab_8">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Table</span>
                                </label>
                                <div className="tab-content w-full">
                                    <TableDemo />
                                </div>

                                <input type="radio" id="tab_9" name="tab" />
                                <label className="mr8" htmlFor="tab_9">
                                    <div className="radio-out"></div>
                                    <span className="btn p-r ptb6 plr8 mlr8 regularLineMove">Image</span>
                                </label>
                                <div className="tab-content w-full">
                                    <ImageDemo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
