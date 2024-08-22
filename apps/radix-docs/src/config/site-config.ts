import type { SiteConfig } from '../types';

const siteConfig = {
    navigation: [
        {
            name: 'Theme',
            section: 'themes',
            sections: [
                {
                    section: 'Overview',
                    pages: [
                        { name: 'Getting started', url: '/themes/overview/getting-started' },
                        { name: 'Styling', url: '/themes/overview/styling' },
                        { name: 'Component', url: '/themes/overview/custom-component' }
                    ]
                },
                {
                    section: 'Theme',
                    pages: [
                        { name: 'Overview', url: '/themes/theme/overview' }]
                },
                {
                    section: 'Components',
                    pages: [
                        { name: 'Avatar', url: '/themes/components/avatar' }]
                }
            ]
        },
        {
            name: 'Primitives',
            section: 'primitives',
            sections: [
                {
                    section: 'Overview',
                    pages: [
                        { name: 'Introduction', url: '/primitives/overview/introduction' },
                        { name: 'Installation', url: '/primitives/overview/installation' },
                        { name: 'Overview', url: '/primitives/overview/overview' }
                    ]
                },
                {
                    section: 'Components',
                    pages: [
                        { name: 'Avatar', url: '/primitives/components/avatar' },
                        { name: 'Label', url: '/primitives/components/label' }
                    ]
                }
            ]
        }
    ]
} satisfies SiteConfig;

export default siteConfig;