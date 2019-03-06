const allKCItems = [
    {
        id: 1,
        type: 'category',
        title: 'Raiser\'s Edge',
        searchData: ['Raiser\'s Edge', 'CMS'],
        parentReference: [
            {
                id: 8
            }
        ]
    },
    {
        id: 2,
        type: 'gitbook',
        title: 'Adding Actions',
        searchData: ['Actions'],
        parentReference: [
            {
                id: 1
            }
        ]
    },
    {
        id: 3,
        type: 'video',
        title: 'Tableau Training',
        searchData: ['Tableau Training', 'Videos'],
        parentReference: [
            {
                id: 8
            }
        ]

    },
    {
        id: 4,
        type: 'link',
        title: 'Building Evacuation Plans',
        searchData: ['Building Evacuation Plans', 'Emergency Information'],
        parentReference: [
            {
                id: 7
            }
        ]
    },
    {
        id: 5,
        type: 'link',
        title: 'Employee Contacts',
        searchData: ['Employee Contacts', 'Employee Resources'],
        parentReference: [
            {
                id: 7
            }
        ]
    },
    {
        id: 6,
        type: 'video',
        title: 'Raiser\'s Edge Training',
        searchData: ['Raiser\'s Edge Training', 'CMS', 'Content Management System'],
        parentReference: [
            {
                id: 1
            },
            {
                id: 8
            }
        ]
    },
    {
        id: 7,
        type: 'category',
        title: 'Employee Information',
        searchData: ['Employee Information', 'Human Resources'],
        parentReference: [

        ]
    },
    {
        id: 8,
        type: 'category',
        title: 'Reporting',
        searchData: ['Reporting'],
        parentReference: [

        ]
    },
    {
        id: 9,
        type: 'category',
        title: 'General Information',
        searchData: ['General Information'],
        parentReference: [

        ]
    },
    {
        id: 10,
        type: 'category',
        title: 'Tools',
        searchData: ['Tools'],
        parentReference: [

        ]
    },
    {
        id: 11,
        type: 'category',
        title: 'Microsoft Office Training',
        searchData: ['Microsoft Office', 'Training', 'Tutorials', 'Videos'],
        parentReference: [
            {
                id: 10
            }
        ]
    },
    {
        id: 12,
        type: 'video',
        title: 'Microsoft Excel',
        searchData: ['Microsoft Excel', 'Training', 'Tutorials', 'Videos'],
        parentReference: [
            {
                id: 11
            }
        ]
    },
    {
        id: 13,
        type: 'video',
        title: 'Microsoft Word',
        searchData: ['Microsoft Word', 'Training', 'Tutorials', 'Videos'],
        parentReference: [
            {
                id: 11
            }
        ]
    },
    {
        id: 14,
        type: 'video',
        title: 'Microsoft Powerpoint',
        searchData: ['Microsoft Powerpoint', 'Training', 'Tutorials', 'Videos'],
        parentReference: [
            {
                id: 11
            }
        ]
    }
];

export default allKCItems;