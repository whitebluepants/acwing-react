import React, { Component } from 'react';
import Boxes from './boxes';
import NavBar from './navbar';

class App extends Component {
    state = {
        boxes: [
            {id: 0, x: 1},
            {id: 1, x: 2},
            {id: 2, x: 3},
            {id: 3, x: 4},
        ]
    } 

    componentDidUpdate() {
        console.log("app - update");
    }


    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        )
        this.setState({
            boxes: boxes,
        })
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {id: b.id, x: 0};
        });
        this.setState({
            boxes: boxes,
        })

        console.log(this.state);
    }

    handleClickLeft = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x --;
        this.setState({
            boxes: boxes,
        })
    }
    
    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++;
        this.setState({
            boxes: boxes,
        })
    }

    render() { 
        console.log("App - render");

        return (
            <React.Fragment>
                <NavBar boxesCount={this.state.boxes.filter(b => b.x !== 0).length}>
                </NavBar>

                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                    >
                    </Boxes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;