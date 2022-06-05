import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: 1, 
    } 

    styles = {
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
        color: "white",
        textAlign: "center",
        lineHeight: "50px",
        borderRadius: "5px",
    }

    render() { 
        return (
        <React.Fragment>
            <div style={this.styles}>{this.toString()}</div>
            <button className='btn btn-primary m-2'>left</button>
            <button className='btn btn-success m-2'>right</button>
        </React.Fragment>
        );
    }

    toString() {
        return `x: ${this.state.x}`;
    }
}
 
export default Box;