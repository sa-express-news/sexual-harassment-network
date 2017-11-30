import * as cytoscape from 'cytoscape';
import { elements, style } from './data';

const cy = cytoscape({
    container: document.getElementById('cy'),
    panningEnabled: false,

    elements: elements,

    style: style as any,

    layout: {
        name: 'grid',
        rows: 3
    }
});