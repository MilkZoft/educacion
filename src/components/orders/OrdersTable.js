import React from 'react';
import OrderRow from './OrderRow';

class OrdersTable extends React.Component {
    render() {
        let map = Array.prototype.map;
        let orders = this.props.orders;

        let rows = map.call(orders, function(order, i) {
            return <OrderRow order={ order } key={ i } />;
        });

        return (
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th className="sorted-by">Ordered at</th>
                        <th>Product(s)</th>
                        <th className="amount">Amount</th>
                        <th className="status">Payment Status</th>
                        <th className="status">Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}

export default OrdersTable;
