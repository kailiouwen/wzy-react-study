import React, { PureComponent } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';

export function AboutHisotry(props) {
    return <h2>企业成立于2000年, 拥有悠久的历史文化</h2>
}

export function AboutJoin(props) {
    return <h2>投递简历到aaaa@123.com</h2>
}


export default class About extends PureComponent {
    render() {
        console.log(this.props.route);
        const branch = matchRoutes(this.props.route.routes, "/about");
        console.log(branch);
        return (
            <div>
                <NavLink to="/about" activeClassName="about-active">企业历史</NavLink>
                <button onClick={e => this.jumpToJoin()}>加入我们</button>
                {renderRoutes(this.props.route.routes)}
            </div>
        )

    }

    jumpToJoin() {
        this.props.history.push("/about/join");
    }
}
