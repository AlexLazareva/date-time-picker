import React, { PropTypes } from 'react';

export default class Calendar extends React.Component {

    static propTypes = {
        moment: PropTypes.any.isRequired,
        className: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}
