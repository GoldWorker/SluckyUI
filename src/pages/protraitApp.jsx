import React, { Component } from 'react';
import Toast from 'slucky/src/component/toast';
import LrChange from 'slucky/src/component/lrChange';

const CANVANS_SIZE = 256;

export default class ProtraitApp extends Component {
    constructor() {
        super();
        const imgSourceList = [{
            source: require('../images/decoration1.png'),
            style: {
                width: 96,
                height: 128,
                top: `${CANVANS_SIZE - 128}`,
                left: `${CANVANS_SIZE - 96}`
            }
        }, {
            source: require('../images/decoration2.png'),
            style: {
                width: 96,
                height: 128,
                top: 0,
                left: 80
            }
        }, {
            source: require('../images/decoration4.png'),
            style: {
                width: 256,
                height: 256,
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
            decorationList: imgSourceList
        };
    }
    componentDidMount() {
        this.initCanvas();
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
        if (!sourceImage) {
            return false;
        }

        if (!/image/ig.test(sourceImage.type)) {
            Toast.warn('仅支持上传图片');
            return false;
        }

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

        this.setState({
            imgUrl: canvas.toDataURL('image/png')
        });
    }

    handleChangeDecorate(item) {
        this.setState({
            decorationCurrent: item
        });
    }

    async handleClickSaveImage() {
        const { imgUrl, decorationCurrent } = this.state;
        if (!imgUrl) {
            Toast.warn('请先上传头像');
            return false;
        }

        const { source, style } = decorationCurrent;
        const { width, height, top, left } = style;
        const { canvas } = this.refs;
        this.clearCanvas(canvas);

        const context = canvas.getContext('2d');

        const bgImg = await this.createImage(imgUrl);
        context.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height);

        const imgObj = await this.createImage(source);
        context.drawImage(imgObj, left, top, width, height);

        this.downloadImage(canvas.toDataURL('image/png'));
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
        if (url) {
            const aLink = document.createElement('a');
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('click', true, true);
            aLink.download = 'protrait.png';
            aLink.href = url;
            aLink.click();
        }
    }

    num2px(obj) {
        const res = {};
        for (const k in obj) {
            if (obj.hasOwnProperty(k)) {
                const elem = obj[k];
                res[k] = elem + 'px';
            }
        }
        return res;
    }

    render() {
        const { decorationList } = this.state;
        const { source, style } = this.state.decorationCurrent;
        return (
            <div className="d-f ac fullscreen bg-title">
                {/* <img src={require('../images/bg1.jpg')} alt="" className="p-a z-1" style={{ height: '100%', opacity: 0.9 }} /> */}
                <div className="w-full">
                    <div className="fs18 ta-c pb32">制作你的专属头像</div>
                    <LrChange
                        option={decorationList}
                        onChange={(item) => this.handleChangeDecorate(item)}>
                        {
                            <div className="p-r w256 h256 shadow">
                                <img src={source} alt="" className="p-a z1" style={this.num2px(style)} />
                                <img src={this.state.imgUrl} alt="" className="p-a l0 t0" />
                            </div>
                        }
                    </LrChange>
                    <div className="ta-c pt32">
                        <div className="fileup-container mr8">
                            <div className="fileup">
                                <label htmlFor="input_file" className="fileup-in btn ptb4 plr16 c-text-w bg-theme">上传头像</label>
                                <input type="file" id="input_file" ref="upload_file" onChange={(e) => this.handleChangeUpload(e)} />
                            </div>
                        </div>
                        <button className="btn btn-n plr16 ptb4 ml8" onClick={() => this.handleClickSaveImage()}>保存头像</button>
                    </div>
                    <canvas className="d-n" ref="canvas" />
                    {/* <img src={this.state.imgUrl} alt="" /> */}
                </div>
            </div>
        );
    }
}
