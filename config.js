var theme =
{
    logo: 'http://graph.facebook.com/taikai.takeda/picture',
    author: {
        github: 'https://github.com/seataK',
        twitter: 'https://twitter.com/BigSea____',
        linkedin: 'http://www.linkedin.com/pub/taikai-takeda/99/568/6b8',
        email: 'mailto:297.1951@gmail.com'
    },
    disqus: {
        shortname: '[YOUR DISQUS SHORTNAME]'
    },
    google: {
        analytics: {
            account: '[YOUR GA ACCOUNT]',
            domain: '[YOUR GA DOMAIN]'
        }
    },

    menu: [
        { route: '', text: 'Home'},
        { route: '/about', text: 'About'},
        { route: '/projects', text: 'Projects'}
    ]
}

// Export config
module.exports = theme;
