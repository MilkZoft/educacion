import React from 'react';
import PageHeader from './PageHeader';
import OrdersTable from './OrdersTable';
import ordersData from '../../data/orders'

class Orders extends React.Component {
    render() {
        return (
            <div className="orders">
                <PageHeader>
                    <h1>Orders</h1>
                </PageHeader>
                <OrdersTable orders={ ordersData } />
            </div>
        );
    }
}

export default Orders;
