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
            'Contributed across 10+ frontend & backend repos within a 10+ person team, supporting a data encoding platform used by hundreds of researchers',
            'Identified and eliminated 7–8 redundant API calls, improving page responsiveness',
            'Modernized legacy apps — rebuilt frontend in React, enhanced backend services in .NET',
            'Drove migration of 40+ repositories (incl. shared libraries) from GitLab to GitHub, rebuilt CI/CD pipelines on GitHub Actions, managed production cutover',
            'Owned end-to-end production issue resolution across UI/API/infra — handled 8–10 issues/month',
        ]
    },
    {
        header: 'Valuecoders Pvt. Ltd., Gurugram',
        title: 'Associate Software Developer',
        date: '2021-2024',
        description: [
            'Consultant Full-Stack Developer for Delhivery — Last Mile platform processing millions of parcels/day across 18,000+ pin codes',
            'Optimized PostgreSQL query execution via indexing & query refactoring',
            'Reduced API response times by up to 50% through backend refactoring',
            'Proactively monitored services using AWS, New Relic, Coralogix during peak traffic periods',
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