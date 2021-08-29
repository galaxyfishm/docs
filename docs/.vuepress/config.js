const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    title: "galaxyfishm",
    description: "This is my blog",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {            
              return moment(timestamp).fromNow("LLLL")
            }
          }
        ]
      ],
    themeConfig: {
        logo: '/assets/img/log.JPG',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [{ text: 'Home', link: '/' },
                        { text: 'Guide', link: '/about' },]
                    },
                    {
                        text: 'Group2', items: [{ text: 'Home', link: '/' },
                        { text: 'Guide', link: '/about' },]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            'about',
            'about1'
        ],
        lastUpdated: '更新时间'
    }
}