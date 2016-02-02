import React from 'react';
import PageHeader from './PageHeader';
import OrdersTable from './OrdersTable';
import { toTitleCase } from '../../lib/formatters';
import ordersData from '../../data/orders'

let statuses = ['all', 'open', 'shipped'];

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedStatus: 'all' };
    }

    handleStatusClick(status) {
        this.setState({ selectedStatus: status });
    }

    render() {
        const { selectedStatus } = this.state;

        const STATUSES = statuses.map((status, i) => {
            const className = status === selectedStatus ? 'selected status' : 'status';

            return (
                <a key={ i } className={ className } onClick={ this.handleStatusClick.bind(this, status) }>
                    { toTitleCase(status) }
                </a>
            );
        });

        let orders = ordersData;

        if (selectedStatus !== 'all') {
            orders = ordersData.filter((order) => {
                return order.orderStatus === selectedStatus;
            });
        }

        return (
            <div className="orders">
                <PageHeader>
                    <h1>Orders</h1>
                    <nav className="status-nav">{ STATUSES }</nav>
                </PageHeader>

                <OrdersTable orders={ orders } />
            </div>
        );
    }
}

export default Orders;
