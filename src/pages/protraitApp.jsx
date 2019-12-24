import React, { Component } from 'react';
import Toast from 'slucky/src/component/toast';
import Lrchange from 'slucky/src/component/lrChange';

import './protraitApp.scss';

const CANVANS_SIZE = 256;

export default class ProtraitApp extends Component {
    constructor() {
        super();
        const imgSourceList = [{
            source: require('../images/d9.png'),
            style: {
                width: 128,
                height: 128,
                top: `${CANVANS_SIZE - 128}`,
                left: `${CANVANS_SIZE - 128}`
            }
        }, {
            source: require('../images/d12.png'),
            style: {
                width: 128,
                height: 128,
                top: `${CANVANS_SIZE - 138}`,
                left: 0
            }
        }, {
            source: require('../images/d13.png'),
            style: {
                width: 500,
                height: 500,
                top: -110,
                left: -110
            }
        }, {
            source: require('../images/d14.png'),
            style: {
                width: 256,
                height: 256,
                top: 0,
                left: 0
            }
        }, {
            source: require('../images/d15.png'),
            style: {
                width: 256,
                height: 196,
                top: 0,
                left: 0
            }
        }, {
            source: require('../images/decoration1.png'),
            style: {
                width: 96,
                height: 128,
                top: `${CANVANS_SIZE - 128}`,
                left: `${CANVANS_SIZE - 96}`
            }
        }, {
            source: require('../images/decoration7.png'),
            style: {
                width: CANVANS_SIZE,
                height: 96,
                top: -8,
                left: 0
            }
        }, {
            source: require('../images/decoration5.png'),
            style: {
                width: 128,
                height: 120,
                top: `${CANVANS_SIZE - 120}`,
                left: `${CANVANS_SIZE - 128}`
            }
        }, {
            source: require('../images/d10.png'),
            style: {
                width: 128,
                height: 128,
                top: `${CANVANS_SIZE - 128}`,
                left: `${CANVANS_SIZE - 128}`
            }
        }, {
            source: '',
            style: {
                width: 0,
                height: 0,
                top: 0,
                left: 0
            }
        }];
        this.state = {
            sourceImage: '',
            sourceImageUrl: '',
            imgUrl: '',
            targetUrl: '',
            decorationCurrent: imgSourceList[0],
            decorationList: imgSourceList,
            border: {
                name: '圆角边框',
                value: 'rect'
            },
            loading: false
        };
    }

    componentDidMount() {
        const { decorationCurrent } = this.state;
        this.initCanvas();
        this.handleMakeImage(null, decorationCurrent).then(targetUrl => {
            this.setState({
                targetUrl
            });
        });
    }

    initCanvas() {
        const { canvas } = this.refs;
        canvas.width = CANVANS_SIZE;
        canvas.height = CANVANS_SIZE;
    }

    async handleChangeUpload(e) {
        const { canvas } = this.refs;
        const context = canvas.getContext('2d');
        const sourceImage = e.target.files[0];
        const { decorationCurrent } = this.state;
        if (!sourceImage) {
            return false;
        }
        if (!/image/ig.test(sourceImage.type)) {
            Toast.warn('仅支持上传图片');
            return false;
        }
        this.setState({
            loading: true
        });

        const base64Url = await this.file2Base64(sourceImage);
        const imgObj = await this.createImage(base64Url);
        // 调整用户图片尺寸
        const type = imgObj.width - imgObj.height;
        if (type > 0) {
            const w = imgObj.width * CANVANS_SIZE / imgObj.height;
            context.drawImage(imgObj, 0, 0, w, CANVANS_SIZE);
        } else if (type < 0) {
            const h = imgObj.height * CANVANS_SIZE / imgObj.width;
            context.drawImage(imgObj, 0, 0, CANVANS_SIZE, h);
        } else {
            context.drawImage(imgObj, 0, 0, CANVANS_SIZE, CANVANS_SIZE);
        }

        const imgUrl = canvas.toDataURL('image/png');
        this.setState({
            imgUrl
        });
        this.handleMakeImage(imgUrl, decorationCurrent).then(targetUrl => {
            this.setState({
                targetUrl,
                loading: false
            });
        });
    }

    handleChangeDecorate(item) {
        const { imgUrl } = this.state;
        this.setState({
            decorationCurrent: item,
            loading: true
        });
        this.handleMakeImage(imgUrl, item).then(targetUrl => {
            this.setState({
                targetUrl,
                loading: false
            });
        });
    }

    handleChangeBorder(border) {
        const { imgUrl, decorationCurrent } = this.state;
        this.setState({
            border,
            loading: true
        }, () => {
            this.handleMakeImage(imgUrl, decorationCurrent).then(targetUrl => {
                this.setState({
                    targetUrl,
                    loading: false
                });
            });
        });
    }

    /**
     * @param {string} imgUrl (进过处理的用户图片url)
     * @param {object} decorationCurrent (饰品对象)
     * @returns imageUrl
     * @memberof App
     */
    async handleMakeImage(imgUrl, decorationCurrent) {
        if (!(imgUrl || decorationCurrent)) { return ''; }
        const { border } = this.state;
        const { value } = border;
        const { source, style } = decorationCurrent;
        const { width, height, top, left } = style;
        const { canvas } = this.refs;
        this.clearCanvas(canvas);
        const context = canvas.getContext('2d');

        if (imgUrl) {
            const bgImg = await this.createImage(imgUrl);
            context.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height);
        }
        this.drawBorder(value, context);
        if (decorationCurrent && source) {
            const imgObj = await this.createImage(source);
            context.drawImage(imgObj, left, top, width, height);
        }

        const targetUrl = canvas.toDataURL('image/png');
        return targetUrl;
    }


    /**
     * @param {*} type 边框类型
     * @param {*} context canvas上下文
     * @memberof App
     */
    drawBorder(type, context) {
        let rect = {};
        switch (type) {
            case 'rect':
                rect = this.Rect(-5, -5, CANVANS_SIZE + 10, CANVANS_SIZE + 10);
                this.drawUsingArc(rect, 40, context);
                break;
            case 'circle':
                rect = this.Rect(-22, -22, 300, 300);
                this.drawUsingArc(rect, 150, context, 60);
            default:
                break;
        }
    }

    Rect(x, y, w, h) {
        return { x: x, y: y, width: w, height: h };
    }

    drawUsingArc(rect, r, ctx, w = 20) {
        //https://blog.csdn.net/sarkuya/article/details/49793531
        const path = new Path2D();
        path.moveTo(rect.x + r, rect.y);
        path.lineTo(rect.x + rect.width - r, rect.y);
        path.arc(rect.x + rect.width - r, rect.y + r, r, Math.PI / 180 * 270, 0, false);
        path.lineTo(rect.x + rect.width, rect.y + rect.height - r);
        path.arc(rect.x + rect.width - r, rect.y + rect.height - r, r, 0, Math.PI / 180 * 90, 0, false);
        path.lineTo(rect.x + r, rect.y + rect.height);
        path.arc(rect.x + r, rect.y + rect.height - r, r, Math.PI / 180 * 90, Math.PI / 180 * 180, false);
        path.lineTo(rect.x, rect.y + r);
        path.arc(rect.x + r, rect.y + r, r, Math.PI / 180 * 180, Math.PI / 180 * 270, false);
        ctx.lineWidth = w;
        ctx.strokeStyle = '#fff';
        ctx.stroke(path);
    }

    file2Base64(domFile) {
        return new Promise((resolve, rejest) => {
            const reader = new FileReader();
            reader.readAsDataURL(domFile);
            reader.onload = (e) => {
                resolve(reader.result);
            };
        });
    }

    createImage(imgUrl) {
        return new Promise((resolve, rejest) => {
            const imgObj = new Image();
            imgObj.src = imgUrl;
            imgObj.onload = (e) => {
                resolve(imgObj);
            };
        });
    }

    clearCanvas(targetCanvans) {
        let ctx = targetCanvans.getContext('2d');
        ctx.clearRect(0, 0, targetCanvans.width, targetCanvans.height);
    }

    downloadImage(url) {
        const { imgUrl } = this.state;
        if (!imgUrl) {
            Toast.warn('请先上传头像');
            return false;
        }
        if (url) {
            const aLink = document.createElement('a');
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('click', true, true);
            aLink.download = 'protrait.png';
            aLink.href = url;
            aLink.click();
        }
    }

    render() {
        const { decorationList, targetUrl, imgUrl } = this.state;
        return (
            <div className="d-f fullscreen ac app-bg">
                <div className="w-full p-r z9">
                    <div className="fs18 ta-c pb32">制作你的专属头像</div>
                    <Lrchange
                        option={decorationList}
                        onChange={(item) => this.handleChangeDecorate(item)}>
                        {
                            <div className="w256 h256 shadow p-r" loader-inline={this.state.loading ? 'circle' : ''}>
                                <img src={targetUrl} alt="" />
                                {/* <img src={imgUrl} alt="" /> */}
                            </div>
                        }
                    </Lrchange>
                    <Lrchange
                        option={[{
                            name: '圆角边框',
                            value: 'rect'
                        }, {
                            name: '圆框',
                            value: 'circle'
                        }, {
                            name: '无边框',
                            value: ''
                        }]}
                        onChange={(item) => this.handleChangeBorder(item)}>
                        {
                            <div className="w256 ta-c pt32 pb8 fs18">{this.state.border.name}</div>
                        }
                    </Lrchange>
                    <div className="ta-c pt32">
                        <div className="fileup-container mr8">
                            <div className="fileup">
                                <label htmlFor="input_file" className="fileup-in btn ptb4 plr16 c-text-w bg-theme">上传头像</label>
                                <input type="file" id="input_file" ref="upload_file" onChange={(e) => this.handleChangeUpload(e)} />
                            </div>
                        </div>
                        <button className="btn btn-w plr16 ptb4 ml8" onClick={() => this.downloadImage(targetUrl)}>浏览器/PC端点击下载</button>
                    </div>
                    <div className="c-hint-b ta-c pt16">移动端长按图片即可保存</div>
                    <canvas className="w256 h256 shadow d-n" ref="canvas" />
                </div>
            </div>
        );
    }
}
