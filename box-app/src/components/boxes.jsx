import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    state = {  } 

    componentDidUpdate() {
        console.log("boxes - update");
    }
    
    render() { 
        console.log("Boxes - render");

        return (
            <React.Fragment>
                <button onClick={this.props.onReset} style={{marginBottom: "20px"}} className='btn btn-info'>Reset</button>
                
                {this.props.boxes.map(box => (
                    <Box 
                        key={box.id} 
                        box={box}
                        onDelete={() => this.props.onDelete(box.id)}
                        onClickLeft={() => this.props.onClickLeft(box)}
                        onClickRight={() => this.props.onClickRight(box)}
                    >
                    </Box>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Boxes;