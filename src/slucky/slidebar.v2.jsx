import React, { Component } from 'react'

export default class SlidebarV2 extends Component {
    render() {
        return (
            <div>
                <div class="d-f view">
                    <div class="slidebar2-box-normalize slidebar2-hover-b">
                        <input type="checkbox" id="slidebar2-switch" class="d-n" checked />
                        <div class="slidebar2 bg-b d-f fd">
                            <div class="slidebar2-tool p16 d-f jc-b ac d-il">
                                <a href="http://home.jpushoa.com" target="_blank" class="ta-l"><img alt="logo" class="logo-icon" src={require('./images/bg_test.jpg')} /></a>

                                <label for="slidebar2-switch" class="d-il p8 m8 c-placeholder pointer">
                                    <span class="">
                                        {/* <img alt="logo" class="icon" src="assets/imgs/menu.svg" /> */}
                                        menu
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="ov-a h-full fs14" scrollbar='normal'>
                            <details>
                                <summary class="pl16 ptb16 c-placeholder">adf</summary>
                                <ul class="menu w-full">
                                    <li>
                                        <a class="c-placeholder" href="" >123</a>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div class="mark-b"></div>
                </div>
                <div class="w-full d-f fd">
                    {/* <app-header></app-header> */}
                    <div class="app-root d-f iframe w-full">
                        {/* <iframe id="childrenIframe"  frameborder="0" class="w-full"></iframe> */}
                    </div>
                </div>
            </div>
        )
    }
}
