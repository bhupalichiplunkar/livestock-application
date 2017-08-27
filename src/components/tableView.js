import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

class TableView extends Component{
    renderRows (ticker){
        var index = `${ticker.name}-${ticker.price}`;
        return (
            <tr key={index} className={ticker.class}>
                <td className="data-cell">{ticker.name}</td>
                <td className="data-cell">{ticker.price}</td>
                <td className="data-cell"><TimeAgo date={ticker.updatedAt} /></td>
            </tr>
        )
    }
    render () {
        return (
            <div className="table-data">
                <h3> Real Time Stocks </h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="heading-cell">Ticker</td>
                            <td className="heading-cell">Price</td>
                            <td className="heading-cell">Last Updated</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(this.renderRows)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableView;