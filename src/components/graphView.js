import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class GraphView extends Component{



    renderChart (ticker){
        return (
            <div></div>
        )
    }
    render () {
        return (
            <div className="graph-chart">
                <LineChart width={1000} height={300} data={this.props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend align="right"/>
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            </div>
        )
    }
}

export default GraphView;