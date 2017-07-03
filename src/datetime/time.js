import React, { PropTypes } from 'react';

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
            </div>
        );
    }
}
