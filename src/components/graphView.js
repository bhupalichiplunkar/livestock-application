import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class GraphView extends Component{



    renderChart (ticker){
        return (
            <div></div>
        )
    }
    render () {
        return (
            <div className="graph-chart">
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart width={800} height={300} data={this.props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend align="middle"/>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default GraphView;