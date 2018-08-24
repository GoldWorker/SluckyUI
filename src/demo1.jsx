import React, {
	Component,
	PropTypes
} from 'react'
import moment from 'moment';
import 'moment/locale/zh-cn';
// import { DatePicker } from 'antd';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
moment.locale('zh-cn');
import covBg from './images/bg_test.jpg'
import validator from './lib/validator'
import QRCode from 'qrcode.react';

class Demo1 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {
				imgTem: "",
				name: "",
				college: "",
				date: ""
			},
			cov: {},
			imgSave: {},
			result: {},
			dialogOpen: false,
			loading: false
		}
		validator.config = {
			name: ['isEmpty', 'isName'],
			college: ['isEmpty'],
			date: ['isEmpty'],
		}
	}

	componentDidMount() {
		console.log(this.refs.qrcode)
		// console.log(this.refs.qrcode.toDataURL("image/png"));
		console.log(covBg)
		this.setState({ cov: this.refs.cov, imgSave: this.refs.imgSave })
	}

	handleImgChange(id) {
		console.log(id);
		this.setState({
			data: Object.assign(this.state.data, { imgTem: id })
		})
	}

	handleInputChange(key, e) {
		let tar = this.state.data
		tar[key] = e.target.value
		this.setState({
			data: tar,
			result: validator.validate(this.state.data)
		})
	}

	handleOutImg() {
		console.log(this.state);
		this.setState({
			result: validator.validate(this.state.data)
		})
		if (validator.isSubmit()) {
			let { cov } = this.state
			cov.width = 844;
			cov.height = 1288;
			const { imgTem } = this.state.data
			this.filterImg(imgTem, cov);
			this.setState({
				dialogOpen: true
			})
		}
	}

	handleDateChange(date, dateString) {
		console.log(date, dateString);
		this.setState({
			data: Object.assign(this.state.data, { date: dateString }),
			result: validator.validate(this.state.data)
		})
	}

	clearCanvas(cov) {
		let { imgSave } = this.state;
		let ctx = cov.getContext("2d");
		ctx.clearRect(0, 0, cov.width, cov.height);
		imgSave.src = cov.toDataURL("image/png")
	}

	filterImg(imgTem, cov) {
		let { imgSave } = this.state;
		let imgObj = new Image();
		let context = cov.getContext('2d');
		context.font = '30px Arial'
		context.fillStyle = '#000'
		const { name, college, date } = this.state.data
		this.clearCanvas(cov)
		this.setState({
			loading: true
		})
		switch (imgTem) {
			case 'm1':
				imgObj.src = require('./images/t5.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.fillText(name, 197, 937)
					context.fillText(date, 197, 1018)
					context.fillText('北京理工大学珠海学院', 197, 978)
					context.fillText(college, 516, 978)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
				break;
			case 'm2':
				imgObj.src = require('./images/t3.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.fillStyle = '#fff'
					context.font = '40px Arial'
					context.fillText(name, 151, 465)
					context.fillText(college, 292, 465)
					context.font = '60px Arial'
					context.fillText(date, 151, 546)
					context.font = '40px Arial'
					context.fillText('北京理工大学珠海学院', 92, 700)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
				break;
			case 'm3':
				imgObj.src = require('./images/t2.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.fillText(name, 86, 772)
					context.fillText(date, 86, 815)
					context.fillText(college, 86, 894)
					context.fillText('北京理工大学珠海学院', 86, 937)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
				break;
			case 'm4':
				imgObj.src = require('./images/t1.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.textAlign = "center"
					context.fillText(name, 405, 826)
					context.fillText(date, 405, 872)
					context.fillText(college, 405, 944)
					context.fillText('北京理工大学珠海学院', 405, 994)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
				break;
			case 'm5':
				imgObj.src = require('./images/t4.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.textAlign = "center"
					context.fillText(name, 405, 680)
					context.fillText(date, 405, 724)
					context.fillText(college, 405, 802)
					context.fillText('北京理工大学珠海学院', 405, 845)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
				break;
			default:
				imgObj.src = require('./images/t5.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 844, 1288);
					context.fillText(name, 197, 937)
					context.fillText(date, 197, 1018)
					context.fillText('北京理工大学珠海学院', 197, 978)
					context.fillText(college, 516, 978)
					imgSave.src = cov.toDataURL("image/png")
					this.setState({
						loading: false
					})
				}
		}
	}

	handleValid(isValid, initial, trigger) {
		if (isValid || isValid === undefined) return initial
		else return trigger
	}

	handleDialogClose() {
		this.setState({
			dialogOpen: false
		})
	}

	handleSaveImg() {
		let { cov } = this.state;
		// let { imgSave } = this.state;
		console.log(imgSave, 'asdfasdf');
		// let img = cov.toDataURL("image/png").replace("image/png", "image/octet-stream");
		// imgSave.src = cov.toDataURL("image/png")
		// location = img
	}

	render() {
		const { name, college, date } = this.state.result
		const { loading } = this.state
		return (
			<div>
				<div className="">
					<QRCode ref="qrcode" value="http://facebook.github.io/react/" />
				</div>
				{/* by flyTeng 695508580@qq.com 至所有即将毕业的朋友 */}
				<div className="pl8 pt8 c-hint-b">先选择想要的Style~</div>
				<div className="d-f s0 ov-a m8">
					<div className="checkbox-box-imgstyle mr16">
						<input id="c_1" type="radio" name="imgChange" className="d-n" onChange={() => this.handleImgChange('m1')} />
						<label htmlFor="c_1" className="checkbox-imgstyle">
							<img src={require("./images/m1.jpg")} alt="" style={{ width: '200px', height: '300px' }} />
							<p className="m0">幽默</p>
							<div className="checkbox-mark"><span>✓</span></div>
						</label>
					</div>
					<div className="checkbox-box-imgstyle mr16">
						<input id="c_2" type="radio" name="imgChange" className="d-n" onChange={() => this.handleImgChange('m2')} />
						<label htmlFor="c_2" className="checkbox-imgstyle">
							<img src={require("./images/m2.jpg")} alt="" style={{ width: '200px', height: '300px' }} />
							<p className="m0">风趣</p>
							<div className="checkbox-mark"><span>✓</span></div>
						</label>
					</div>
					<div className="checkbox-box-imgstyle mr16">
						<input id="c_3" type="radio" name="imgChange" className="d-n" onChange={() => this.handleImgChange('m3')} />
						<label htmlFor="c_3" className="checkbox-imgstyle">
							<img src={require("./images/m3.jpg")} alt="" style={{ width: '200px', height: '300px' }} />
							<p className="m0">优雅</p>
							<div className="checkbox-mark"><span>✓</span></div>
						</label>
					</div>
					<div className="checkbox-box-imgstyle mr16">
						<input id="c_4" type="radio" name="imgChange" className="d-n" onChange={() => this.handleImgChange('m4')} />
						<label htmlFor="c_4" className="checkbox-imgstyle">
							<img src={require("./images/m4.jpg")} alt="" style={{ width: '200px', height: '300px' }} />
							<p className="m0">正式</p>
							<div className="checkbox-mark"><span>✓</span></div>
						</label>
					</div>
					<div className="checkbox-box-imgstyle mr16">
						<input id="c_5" type="radio" name="imgChange" className="d-n" onChange={() => this.handleImgChange('m5')} />
						<label htmlFor="c_5" className="checkbox-imgstyle">
							<img src={require("./images/m5.jpg")} alt="" style={{ width: '200px', height: '300px' }} />
							<p className="m0">艺术</p>
							<div className="checkbox-mark"><span>✓</span></div>
						</label>
					</div>
				</div>
				<input type="text" onChange={this.handleInputChange.bind(this, 'name')} className="input input-normal w-full box" maxLength="5" placeholder="输入你的姓名" />
				{name ? (<span className="input-ps fs12 pl8" style={this.handleValid(name.isValid, { 'display': 'none' }, { 'display': 'inline-block', 'opacity': '1' })}>{name.message.map((str) => (str + " "))}</span>
				) : null}
				<input type="text" onChange={this.handleInputChange.bind(this, 'college')} className="input input-normal w-full box" maxLength="8" placeholder="输入你的学院" />
				{college ? (<span className="input-ps fs12 pl8" style={this.handleValid(college.isValid, { 'display': 'none' }, { 'display': 'inline-block', 'opacity': '1' })}>{college.message.map((str) => (str + " "))}</span>
				) : null}
				<DatePicker format="YYYY.MM.DD" onChange={(date, dateString) => this.handleDateChange(date, dateString)} placeholder="选择你的日期" className="w-full box" />
				{date ? (<span className="input-ps fs12 pl8" style={this.handleValid(date.isValid, { 'display': 'none' }, { 'display': 'inline-block', 'opacity': '1' })}>{date.message.map((str) => (str + " "))}</span>
				) : null}
				<div className="plr8 mtb8">
					<button className="btn-mei ptb8 w-full" onClick={() => this.handleOutImg()}>生成</button>
				</div>
				<div className="dialog-mark d-n ac jc-c fd" style={this.state.dialogOpen ? { 'display': 'flex' } : {}}>
					<p className="fs16 c-text-w ta-c mb8">长按图片保存</p>
					<canvas className="shadow d-n" ref="cov" />
					{loading ? (<div className="icon-box">
						<div className="yu-icon">
							<div className="spinner"></div>
						</div>
					</div>) : null}
					<img ref="imgSave" style={{ width: '315px', height: '430px' }} />
					<div className="ta-c">
						{/* <button onClick={() => this.handleSaveImg()} className="btn-w bor ptb4 plr16 mt16 mr8">保存邀请书</button> */}
						<button onClick={() => this.handleDialogClose()} className="btn-w bor ptb4 plr16 mt16">返回</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Demo1