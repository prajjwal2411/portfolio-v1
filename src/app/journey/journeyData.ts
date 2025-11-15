export interface JourneyCardData {
    header: string;
    title: string;
    date: string;
    description: string[];
}


export const journeyData: JourneyCardData[] = [
    {
        header: 'Bachelors Of Computer Applications',
        title: 'Chaudhary Charan Singh University, Meerut',
        date: '2015-2018',
        description: [
            'Achievement 1',
            'Achievement 2',
        ]
    },
    {
        header: 'Masters Of Computer Applications',
        title: 'Dr. APJ Abdul Kalam University, Lucknow',
        date: '2018-2021',
        description: [
            'Achievement 1',
            'Achievement 2',
        ]
    },
    {
        header: 'Valuecoders Pvt. Ltd., Gurugram',
        title: 'Associate Software Developer',
        date: '2021-2024',
        description: [
            'Achievement 1',
            'Achievement 2',
        ]
    },
    {
        header: 'NielsenIQ, Pune',
        title: 'Frontend Software Engineer',
        date: '2024-Present',
        description: [
            'Achievement 1',
            'Achievement 2',
        ]
    }
]