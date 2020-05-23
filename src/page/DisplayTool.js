import React from 'react'
import JoinScroll from '../components/JoinScroll'
class DisplayTool extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return (
            <div>
                <JoinScroll></JoinScroll>
            </div>
        );
    }
}
export default DisplayTool