const initialState = [
    {
        id: 1,
        type: 'category',
        title: 'Raiser\'s Edge',
        searchData: 'Raiser\'s Edge',
        parentReference: [
            {
                id: 8,
                title: 'Reporting'
            }
        ]
    },
    {
        id: 2,
        type: 'gitbook',
        title: 'Adding Actions',
        searchData: 'To add an action you have to first go to...',
        parentReference: [
            {
                id: 1,
                title: 'Raiser\'s Edge'
            }
        ]
    },
    {
        id: 3,
        type: 'video',
        title: 'Tableau Training',
        searchData: 'Tableau Training',
        parentReference: [
            {
                id: 8,
                title: 'Reporting'
            }
        ]

    },
    {
        id: 4,
        type: 'link',
        title: 'Building Evacuation Plans',
        searchData: 'Building Evacuation Plans',
        parentReference: [
            {
                id: 7,
                title: 'Employee Information'
            }
        ]
    },
    {
        id: 5,
        type: 'link',
        title: 'Employee Contacts',
        searchData: 'Employee Contacts',
        parentReference: [
            {
                id: 7,
                title: 'Employee Information'
            }
        ]
    },
    {
        id: 6,
        type: 'video',
        title: 'Raiser\'s Edge Training',
        searchData: 'Raiser\'s Edge Training',
        parentReference: [
            {
                id: 1,
                title: 'Raiser\'s Edge'
            },
            {
                id: 8,
                title: 'Reporting'
            }
        ]
    },
    {
        id: 7,
        type: 'category',
        title: 'Employee Information',
        searchData: 'Employee Information',
        parentReference: [

        ]
    },
    {
        id: 8,
        type: 'category',
        title: 'Reporting',
        searchData: 'Reporting',
        parentReference: [

        ]
    }
];

export default initialState;