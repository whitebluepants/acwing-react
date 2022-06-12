import React, { Component, useImperativeHandle } from 'react';

class NavBar extends Component {
    state = {  }
    
    componentDidUpdate() {
        console.log("navbar - update");
    }
    
    render() { 
        console.log("Navbar - render");

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar <span>Boxes Count: {this.props.boxesCount}</span>
                    </a>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
