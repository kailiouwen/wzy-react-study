import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
    render() {
        console.log(this.props.location);
        return (
            <div>
                <h2>detail3</h2>
            </div>
        )
    }
}
