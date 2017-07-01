import React from 'react';
import { bindAll } from 'lodash';
import classnames from 'classnames';
import './styles.less';

export default class DateTime extends React.Component {

    constructor(props) {
        super(props);

        bindAll(this, ['handleFocus', 'handleSave']);
    }

    render() {

        const btnDate = classnames('dt-btn', {'is-active' : tab === 0});
        const btnTime = classnames('dt-btn', {'is-active' : tab === 1});
        const calendarClasses = classnames('tab', {'is-active' : tab === 0});
        const timeClasses = classnames('tab', {'is-active' : tab === 1});

        return (
            <div className='b-datetime'>
                <div className='dt-input'>
                    <input type='text' onFocus={ this.handleFocus }/>
                </div>
                <div className='options'>
                    <button className={ btnDate } onClick={ this.handleTabClick.bind(this, 0) }>Дата</button>
                    <button className={ btnTime } onClick={ this.handleTabClick.bind(this, 1) }>Время</button>
                </div>
                <div className='tabs'>

                </div>
                <button className='dt-btn-save' onClick={ this.handleSave }>Сохранить</button>
            </div>
        );
    }
}
