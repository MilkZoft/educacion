import OrderRow from '../../../src/components/orders/OrderRow';
import React from 'react';
import { renderShallow } from '../../testHelper';
import moment from 'moment';

let expect = require('chai').expect;
let assert = require('assert');

describe('components/orders/OrderRow', () => {
    let subject;
    let order;

    beforeEach(() => {
        order = {
            reference: '0001',
            customer: 'Carlos',
            orderedAt: moment("2015-03-09T17:14:00.000Z"),
            products: [
                {name: 'Product1', amount: 120.25},
                {name: 'Product2', amount: 220.25}
            ],
            amount: 340.75,
            paymentStatus: 'authorized',
            orderStatus: 'open'
        };

        subject = renderShallow(<OrderRow order={ order } />);
    });

    it('render the columns', () => {
        const tds = subject.props.children.filter((c) => c.type === 'td');
        const tdsContent = tds.map((td) => td.props.children);
        console.log(tdsContent);
        let expected = [
            '0001',
            'Carlos',
            'Mar 9, 10:14am',
            'Product1, Product2',
            '$340.75',
            'Authorized',
            'Open'
        ];

        assert.deepEqual(tdsContent, expected, 'tdsContent should match expected');
    });
});
