import React, { Component } from 'react'

export class Progress extends Component {
    render() {
        return (
            <div className="d-il">
                <progress max="100" value={this.props.percent} className="progress-loading bg-warn" style={{ width: this.props.width || 128 + 'px' }}></progress>
                <span className="d-il ml12">{this.props.percent || 0}%</span>
            </div>
        )
    }
}

export class ProgressCircle extends Component {
    render() {
        return (
            <div className="progress-pie" style={{
                "--percent": this.props.percent || 0,
                width: this.props.radius || 64 + 'px',
                height: this.props.radius || 64 + 'px'
            }}>
                <div className="pip-content d-f ac jc" style={this.props.isPipe ? { backgroundColor: "transparent" } : {}}>{this.props.percent || 0}%</div>
                <div className="pie-left"></div>
                <div className="pie-right"></div>
            </div>
        )
    }
}

export class ProgressPie extends Component {
    render() {
        return (
            <ProgressCircle isPipe={true} radius={this.props.radius} percent={this.props.percent} />
        )
    }
}

export class ProgressWave extends Component {
    render() {
        return (
            <div className="wave-box">
                <div className="wave" style={{ "--radius": this.props.radius || 96 + "px", "--percent": 100 + (this.props.percent || 0) + "%" }}>
                    <div className="pip-content d-f ac jc">{this.props.percent || 0}%</div>
                </div>
            </div>
        )
    }
}
