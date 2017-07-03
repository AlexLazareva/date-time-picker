import React, { PropTypes } from 'react';
import classnames from 'classnames';
import InputSlider from 'react-input-slider';

export default class Time extends React.Component {

    static propTypes = {
        moment: PropTypes.any.isRequired,
        className: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            m: this.props.moment
        }
    }

    changeHours() {

    }

    changeMinutes() {

    }

    render() {
        const { m } = this.state;
        const wrapperClasses = classnames(this.props.className, 'tab-time');

        return (
            <div className={ wrapperClasses }>
                <div className='showtime'>
                    <span className='time'>{ m.format('HH')}</span>
                    <span className='time'>:</span>
                    <span className='time'>{m.format('mm')}</span>
                </div>
                <div className="sliders">
                    <div className='time-text'>Часы</div>
                    <InputSlider className='u-slider-time'
                        xmin={0}
                        xmax={23}
                        x={ m.hour() }
                        onChange={ this.changeHours.bind(this) }
                    />
                    <div className='time-text'>Минуты</div>
                    <InputSlider className='u-slider-time'
                        xmin={0}
                        xmax={59}
                        x={ m.minute() }
                        onChange={ this.changeMinutes.bind(this) }
                    />
                </div>
            </div>
        );
    }
}
