import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div className="">
                <ul className="nav-normal">
                    <li>A</li>
                    <li>B</li>
                    <li>123</li>
                    <li>adf</li>
                    <li>Aadfs1233</li>
                </ul>

                <div className="btn p-r m32 svgMutiLine plr16">
                    <svg
                        className="btn-svgMutiLine"
                        viewBox="0 0 180 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape"></rect>
                    </svg>
                    <div>SluckyUI</div>
                </div>
                <div className="btn p-r m32 regularLineMove">SluckyUI</div>
                <div className="btn p-r m32 regularShadowScale plr16">SluckyUI</div>
                <div className="btn p-r m32 regularShadowMove plr16">SluckyUI</div>
                <div className="wave-box">
                    <div className="wave"></div>
                </div>

                <div className="m32">
                    <div className="tab-box-tb w-full">
                        <div className="tab-contrl">
                            <input type="radio" id="tab_1" name="tab" defaultChecked/>
                            <label htmlFor="tab_1">
                                <div className="tab-container">
                                    <div className="tab-toggle">
                                        <div className="tab-decoration">
                                            <span>asdf</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <div className="tab-content w-full">
                                <div>
                                    123
                                </div>
                            </div>

                            <input type="radio" id="tab_3" name="tab"/>
                            <label htmlFor="tab_3">
                                <div className="tab-container">
                                    <div className="tab-toggle">
                                        <div className="tab-decoration">
                                            <span>qwer</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <div className="tab-content w-full">
                                <div>
                                    234
                                </div>
                            </div>

                            <input type="radio" id="tab_2" name="tab"/>
                            <label htmlFor="tab_2">
                                <div className="tab-container">
                                    <div className="tab-toggle">
                                        <div className="tab-decoration">
                                            <span>zxcv</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <div className="tab-content w-full">
                                546
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
