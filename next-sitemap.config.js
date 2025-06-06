/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.PAGES_BASE_PATH || 'https://ivalin.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}