import React, { Component } from 'react';
import {connect} from 'react-redux';

class Number extends Component {
    state = {  } 

    handleClick = () => {
        this.props.concat('a');
    }

    render() { 
        console.log(this.props);

        return (
            <React.Fragment>
                <h3>Number: </h3>
                <div>{this.props.number}</div>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    }
}

const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            character: c,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Number);