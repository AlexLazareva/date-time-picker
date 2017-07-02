import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import classnames from 'classnames';

export default class Calendar extends React.Component {

    static propTypes = {
        moment: PropTypes.any.isRequired,
        className: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['previosMonth', 'nextMonth', 'renderCells']);

        this.state = {
            m: this.props.moment
        }
    }

    previosMonth() {

    }

    nextMonth() {

    }

    renderCells() {

    }

    render() {
        const { m } = this.state;
        const wrapperClasses = classnames(this.props.className, 'tab-calendar');
        const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        return (
            <div className={ wrapperClasses }>
                <div className='toolbar'>
                    <button className='prev-month' onClick={ this.previosMonth }> - </button>
                    <span className='current-date'>{ m.format('MMM YYYY')}</span>
                    <button className='next-month' onClick={ this.nextMonth }> - </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            { weeks.map((w, i) => <td key={i}>{ w }</td>) }
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCells }
                    </tbody>
                </table>
            </div>
        );
    }
}
