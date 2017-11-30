export const elements = {
    nodes: [
        {
            data: {
                id: 'weinstein',
                name: 'Harvey Weinstein'
            }
        },
        {
            data: {
                id: 'judd',
                name: 'Ashley Judd'
            }
        },
        {
            data: {
                id: 'paltrow',
                name: 'Gwyneth Paltrow'
            }
        },
        {
            data: {
                id: 'jolie',
                name: 'Angelina Jolie'
            }
        },
    ],
    edges: [
        {
            data: {
                source: 'judd',
                target: 'weinstein'
            }
        },
        {
            data: {
                source: 'paltrow',
                target: 'weinstein'
            }
        },
        {
            data: {
                source: 'jolie',
                target: 'weinstein'
            }
        }
    ]
};


export const style = [
    {
        selector: 'node',
        style: {
            'label': 'data(name)',
            'width': 50,
            'height': 50,
            'background-fit': 'cover'
        }
    },

    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
        }
    },
    {
        selector: '#weinstein',
        style: {
            'background-image': 'https://s3.amazonaws.com/projects.expressnews.com/sexual-harassment-network/img/weinstein.jpg',
        }
    }
]