/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ivalin.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}