import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Linux extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Linux</h1>
                <hr />
                <Link to="homework">作业</Link>
                <br></br>
                <Link to="terminal">终端</Link>
                <Outlet></Outlet>
            </React.Fragment>
        );
    }
}
 
export default Linux;