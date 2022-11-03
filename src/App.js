import React, { PureComponent } from 'react';
// import { Button, DatePicker, Space, version } from "antd";
import { renderRoutes } from 'react-router-config';

import routes from './router';

import {
    NavLink,
    withRouter
} from 'react-router-dom';

import './App.css'


class App extends PureComponent {
    render() {
        const id = "123";
        const info = { name: "why", age: 18, height: 1.88 };
        // return (
        //     <div className="App">
        //         <h1>antd version: {version}</h1>
        //         <Space>
        //             <DatePicker />
        //             <Button type="primary">Primary Button</Button>
        //         </Space>
        //     </div>
        // )
        return (
            <div>
                {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

                {/* 1.NavLink的使用 */}
                {/* <NavLink exact to="/" activeStyle={{color: "red", fontSize: "30px"}}>首页</NavLink>
          <NavLink to="/about" activeStyle={{color: "red", fontSize: "30px"}}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{color: "red", fontSize: "30px"}}>我的</NavLink> */}

                <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
                <NavLink to="/about" activeClassName="link-active">关于</NavLink>
                <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
                <NavLink to={`/detail2?name=why&age=188`} activeClassName="link-active">详情2</NavLink>
                <NavLink to={{
                    pathname: "/detail3",
                    search: "name=abc",
                    state: info
                }} activeClassName="link-active">详情3</NavLink>
                <NavLink to="/hook" activeClassName="link-active">hook</NavLink>


                {/* 2.Switch组件的作用: 路径和组件之间的映射关系 */}
                {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={User} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}

                {renderRoutes(routes)}

            </div>
        )
    }
}

export default withRouter(App);
