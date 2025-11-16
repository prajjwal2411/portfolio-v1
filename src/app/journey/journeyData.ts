export interface JourneyCardData {
    header: string;
    title: string;
    date: string;
    description?: string[];
}


export const journeyData: JourneyCardData[] = [
    {
        header: 'NielsenIQ, Pune',
        title: 'Frontend Software Engineer',
        date: '2024-Present',
        description: [
            'Increase the unit test coverage to 90% for the frontend repositories.',
            'Migrated frontend repositories from azure devops to gitlab.',
            'Designed a component library in React with Storybook, enabling consistent UI across multiple projects.'
        ]
    },
    {
        header: 'Valuecoders Pvt. Ltd., Gurugram',
        title: 'Associate Software Developer',
        date: '2021-2024',
        description: [
            'Implemented Google Analytics to gather and analyze user behavior data, providing valuable insights for continuous improvement.',
            'Worked for Thomson Reuters Foundation maintained & redesigned their Stop Slavery Award website',
        ]
    },
    {
        header: 'Bachelors Of Computer Applications',
        title: 'Chaudhary Charan Singh University, Meerut',
        date: '2015-2018',
    },
    {
        header: 'Masters Of Computer Applications',
        title: 'Dr. APJ Abdul Kalam University, Lucknow',
        date: '2018-2021',
    },
]