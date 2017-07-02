import React, { PropTypes } from 'react';
import { bindAll, range, chunk } from 'lodash';
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

    renderCells(m) {
        const d = m.date;
        const d1 = m.clone().subtract(1, 'moth').endOf('month').date();
        const d2 = m.clone().date(1).day();
        const d3 = m.clone().endOf('month').date();

        const days = [].concat(
            range(d1 - d2 + 1, d1 + 1),
            range(1, d3 + 1),
            range(1, 42 - d3 - d2 + 1)
        );

        return chunk(days, 7).map((row, w) => {
            return (
                <tr key={ w }>
                    { row.map((i) => {
                        return (
                            <Day
                                key={ i }
                                i={ i }
                                d={ d }
                                w={ w }
                                onClick={ this.selectDate.bind(this, i, w) }
                            />
                        );
                    }) }
                </tr>
            );
        });
    }

    selectDate(i, w) {
        const prevMonth = (w === 0 && i > 7);
        const nextMonth = (w === 1 && i > 14);

        const { m } = this.state;

        m.date();

        this.setState({ m });

        if (prevMonth) m.subtruct(1, 'month');
        if (nextMonth) m.add(1, 'month');

        this.props.onChange(m);
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
                        { this.renderCells(m) }
                    </tbody>
                </table>
            </div>
        );
    }
}
