import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

function renderShallow(component) {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(component);

    return renderer.getRenderOutput();
}

export { renderShallow };
