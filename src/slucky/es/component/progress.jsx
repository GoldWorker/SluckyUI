import React, { Component } from 'react';

const handleStatus = (status) => {
    switch (status) {
        case 'success':
            return 'c-success';
        case 'warn':
            return 'c-warn';
        case 'fail':
            return 'c-fail';
        default:
            return 'c-theme';
    }
};
export default class Progress extends Component {

    render() {
        return (
            <div className="d-il">
                <progress max="100" value={this.props.percent} className={['progress-loading', handleStatus(this.props.status || 'theme')].join(' ')} style={{ width: this.props.width || 128 + 'px' }}></progress>
                {
                    this.props.content ? this.props.content : <span className="d-il ml12">{this.props.percent || 0}%</span>
                }
            </div>
        );
    }
}

class ProgressCircle extends Component {
    render() {
        return (
            <div className="progress-pie" style={{
                '--percent': this.props.percent || 0,
                width: this.props.radius || 64 + 'px',
                height: this.props.radius || 64 + 'px'
            }}>
                <div className="pip-content d-f ac jc" style={this.props.isPipe ? { backgroundColor: 'transparent' } : {}}>
                    {
                        this.props.content ? this.props.content : <span>{this.props.percent || 0}%</span>
                    }
                </div>
                <div className={['pie-left', handleStatus(this.props.status || 'theme')].join(' ')}></div>
                <div className={['pie-right', handleStatus(this.props.status || 'theme')].join(' ')}></div>
            </div>
        );
    }
}

class ProgressPie extends Component {
    render() {
        return (
            <ProgressCircle isPipe={true} radius={this.props.radius} percent={this.props.percent} status={this.props.status} content={this.props.content} />
        );
    }
}

class ProgressWave extends Component {
    render() {
        return (
            <div className="wave-box">
                <div className="wave" style={{ '--radius': this.props.radius || 96 + 'px', '--percent': 100 + (this.props.percent || 0) + '%' }}>
                    <div className="pip-content d-f ac jc">
                        {
                            this.props.content ? this.props.content : <span>{this.props.percent || 0}%</span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Progress.circle = ProgressCircle;
Progress.pie = ProgressPie;
Progress.wave = ProgressWave;
