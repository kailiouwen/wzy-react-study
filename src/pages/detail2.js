import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
    render() {
        console.log(this.props.location);
        return (
            <div>
                <h2>detail2</h2>
            </div>
        )
    }
}
