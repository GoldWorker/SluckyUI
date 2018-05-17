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

class App extends Component {
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
			result: {},
			dialogOpen: false,
		}
		validator.config = {
			name: ['isEmpty', 'isName'],
			college: ['isEmpty'],
			date: ['isEmpty'],
		}
	}

	componentDidMount() {
		console.log(this.refs.cov)
		console.log(covBg)
		this.setState({ cov: this.refs.cov })
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
			let cov = this.state.cov
			cov.width = 315;
			cov.height = 430;
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

	filterImg(imgTem, cov) {
		let imgObj = new Image();
		let context = cov.getContext('2d');
		context.font = '10px Arial'
		context.fillStyle = '#000'
		const { name, college, date } = this.state.data
		switch (imgTem) {
			case 'm1':
				imgObj.src = require('./images/t5.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.fillText(name, 73, 310)
					context.fillText(date, 73, 340)
					context.fillText('北京理工大学珠海学院', 73, 325)
					context.fillText(college, 180, 325)
				}
				break;
			case 'm2':
				imgObj.src = require('./images/t3.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.fillStyle = '#fff'
					context.font = '14px Arial'
					context.fillText(name, 56, 155)
					context.fillText(college, 108, 155)
					context.font = '22px Arial'
					context.fillText(date, 56, 182)
					context.font = '16px Arial'
					context.fillText('北京理工大学珠海学院', 34, 233)
				}

				break;
			case 'm3':
				imgObj.src = require('./images/t2.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.fillText(name, 32, 260)
					context.fillText(date, 32, 276)
					context.fillText(college, 32, 305)
					context.fillText('北京理工大学珠海学院', 32, 321)
				}
				break;
			case 'm4':
				imgObj.src = require('./images/t1.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.textAlign = "center"
					context.fillText(name, 150, 270)
					context.fillText(date, 150, 286)
					context.fillText(college, 150, 315)
					context.fillText('北京理工大学珠海学院', 150, 331)
				}
				break;
			case 'm5':
				imgObj.src = require('./images/t4.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.textAlign = "center"
					context.fillText(name, 150, 215)
					context.fillText(date, 150, 232)
					context.fillText(college, 150, 260)
					context.fillText('北京理工大学珠海学院', 150, 276)
				}
				break;
			default:
				imgObj.src = require('./images/t5.jpg');
				imgObj.onload = () => {
					context.drawImage(imgObj, 0, 0, 315, 430);
					context.fillText(name, 73, 310)
					context.fillText(date, 73, 340)
					context.fillText(college, 73, 325)
					context.fillText('北京理工大学珠海学院', 135, 325)
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

	render() {
		const { name, college, date } = this.state.result
		return (
			<div>
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
					<canvas className="shadow" ref="cov" />
					<button onClick={() => this.handleDialogClose()} className="btn-w bor ptb4 plr16 mt16">返回</button>
				</div>
			</div>
		)
	}
}

export default App