import React, { Component } from 'react';

class Box extends Component {
    // state = { 
    //     x: this.props.x,
    // } 

    componentDidUpdate() {
        console.log("box - update");
    }

    render() { 
        console.log("Box - render");
        return (
            <React.Fragment>
                <div style={this.getStyles()}>
                    {this.toString()}
                </div>
                <button onClick={this.props.onClickLeft} className='btn btn-primary m-2'>left</button>
                <button onClick={this.props.onClickRight} className='btn btn-success m-2'>right</button>
                <button onClick={this.props.onDelete} className='btn btn-danger m-2'>delete</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let styles = {
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.props.box.x,
        };

        if (this.props.box.x === 0) {
            styles.backgroundColor = 'orange';
        }

        return styles
    }

    toString() {
        return `x: ${this.props.box.x}`;
    }
}
 
export default Box;