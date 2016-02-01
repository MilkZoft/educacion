import moment from 'moment';

let ordersData = [
    {
        reference: '0001',
        customer: 'Carlos',
        orderedAt: moment("2015-03-09T17:14:00.000Z"),
        products: [
            {name: 'Lalala1', amount: 120.25},
            {name: 'Lalala2', amount: 220.25}
        ],
        amount: 340.75,
        paymentStatus: 'authorized',
        orderStatus: 'open'
    },
    {
        reference: '0002',
        customer: 'Criss',
        orderedAt: moment("2015-03-09T17:14:00.000Z"),
        products: [
            {name: 'Lalala3', amount: 120.25},
            {name: 'Lalala4', amount: 220.25}
        ],
        amount: 340.75,
        paymentStatus: 'authorized',
        orderStatus: 'open'
    },
    {
        reference: '0003',
        customer: 'Memo',
        orderedAt: moment("2015-03-09T17:14:00.000Z"),
        products: [
            {name: 'Lalala5', amount: 120.25},
            {name: 'Lalala6', amount: 220.25}
        ],
        amount: 340.75,
        paymentStatus: 'authorized',
        orderStatus: 'open'
    }
];

export default ordersData;
