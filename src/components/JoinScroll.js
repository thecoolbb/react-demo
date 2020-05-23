import React from 'react'
import '../scss/JoinScroll.css'
function getRows(rows){
    return (rows.map(item=>{
        return (<td>item</td>)
    }));
}
class JoinScroll extends React.Component{
    constructor(){
        super();
        this.state = {
            columns: [1,2,3,4,5],
            rows: [6,7,8,9,10]
        };
        this.tableScrollFirst = this.tableScrollFirst.bind(this);
        this.tableScrollSecond = this.tableScrollSecond.bind(this);
    }
    tableScrollFirst(e){
        console.log(e.target);
    }
    tableScrollSecond(e){

    }
    render(){
        return (
            <div>
                <table className="table1" onScroll={this.tableScrollFirst}>
                    {this.state.columns.map((item)=>{
                        return <tr>{getRows(rows)}</tr>
                    })}
                </table>
                <table className="table2" onScroll={this.tableScrollSecond}>
                    {this.state.columns.map((item)=>{
                        return <tr>{getRows(rows)}</tr>
                    })}
                </table>
            </div>
        );
    }
}