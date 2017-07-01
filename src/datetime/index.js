import React from 'react';
import { bindAll } from 'lodash';
import './styles.less';

export default class DateTime extends React.Component {

    constructor(props) {
        super(props);

        bindAll(this, ['handleFocus', 'handleSave']);
    }

    render() {
        return (
            <div className='b-datetime'>
                <div className='dt-input'>
                    <input type='text' onFocus={ this.handleFocus }/>
                </div>
                <div className='options'>

                </div>
                <div className='tabs'>

                </div>
                <button className='dt-btn-save' onClick={ this.handleSave }>Сохранить</button>
            </div>
        );
    }
}
