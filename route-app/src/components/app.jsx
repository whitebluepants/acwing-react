import React, { Component } from 'react';
import NavBar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notFound';
import WebContent from './webContent';
import { Routes, Route, Navigate } from 'react-router-dom';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/linux" element={<Linux></Linux>}>
                            <Route path="homework" element={<h4>homework的内容</h4>}></Route>
                            <Route path="terminal" element={<h4>terminal的内容</h4>}></Route>
                            <Route path="*" element={<h4>其他</h4>}></Route>
                        </Route>
                        <Route path="/django" element={<Django></Django>}></Route>
                        <Route path="/web" element={<Web></Web>}></Route>
                        <Route path="/web/content" element={<WebContent></WebContent>}></Route>
                        <Route path="/404" element={<NotFound></NotFound>}></Route>
                        <Route path="*" element={<Navigate replace to="/404"></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;