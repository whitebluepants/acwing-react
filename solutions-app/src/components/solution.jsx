import React, { Component } from 'react';

class Solution extends Component {
    state = { 
        solutions: [
            {key: 10, number: 1164, title: "加工灵剑1", views: 2937},
            {key: 11, number: 1165, title: "加工灵剑2", views: 2938},
            {key: 12, number: 1166, title: "加工灵剑3", views: 2939},
            {key: 13, number: 1167, title: "加工灵剑4", views: 2930},
            {key: 14, number: 1168, title: "加工灵剑5", views: 2931},
            {key: 15, number: 1169, title: "加工灵剑6", views: 2932},
            {key: 16, number: 1170, title: "加工灵剑7", views: 2933},
            {key: 17, number: 1171, title: "加工灵剑8", views: 2934},
            {key: 18, number: 1172, title: "加工灵剑9", views: 2935},
        ]
    } 

    handleDelete = (s) => {
        const solutions = this.state.solutions.filter(solution => solution !== s);
        this.setState({
            solutions: solutions,
        });
    }

    render() { 
        if (this.state.solutions.length === 0) {
            return <p>没有题解啦</p>
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr key={solution.key}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={() => this.handleDelete(solution)} className='btn btn-danger'>删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;