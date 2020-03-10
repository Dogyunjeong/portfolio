export default {
  version: 0.1,
  uuid: 'test-static-web-prototype',
  // Creator should ID for user in the future
  creator: 'by-tati-test-id',
  createdAt: '2019-12-08T12:41:06.219Z',
  updatedAt: '2019-12-08T12:41:06.219Z',
  pages: [
    // Top level Pages
    {
      path: '',
      layout: {
        uuid: 'portfolio',
        header: {
          title: 'by Tati',
          drawer: [
            {
              uuid: 'area-image',
              type: 'area',
              alt: 'logo',
              src: '/assets/svg/logo.svg',
              class: 'logo'
            },
            {
              uuid: 'link-svg',
              type: 'link',
              title: 'home',
              href: '/',
              svgSrc: '/assets/svg/nav_item_01.svg',
              hoverTitle: 'HOME',
              class: 'navItem'
            },
            {
              uuid: 'link-svg',
              type: 'link',
              title: 'archive',
              href: '/',
              svgSrc: '/assets/svg/nav_item_02.svg',
              hoverTitle: 'ARCHIVE',
              class: 'navItem'
            },
            {
              uuid: 'link-svg',
              type: 'link',
              title: 'shop',
              href: '/',
              svgSrc: '/assets/svg/nav_item_03.svg',
              hoverTitle: 'SHOP',
              class: 'navItem'
            },
            {
              uuid: 'link-svg',
              type: 'link',
              title: 'info',
              href: '/',
              svgSrc: '/assets/svg/nav_item_04.svg',
              hoverTitle: 'INFO',
              class: 'navItem'
            },
          ],
          customStyles: {
            drawer: {
              width: '500px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '& $navItem': {
                width: '100%',
                height: 70,
                margin: '30px 0',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
              }
            },
            navItem: {},
            logo: {},
          },
        },
      },
      components: [],
      pages: [
        {
          path: 'univ-final-collection',
          uuid: 'test-page-univ-final-collection',
          components: [{
            uuid: 'portfolio-collection',
            type: 'image-collection',
            images: [
              {
                label: '',
                src: 'https://images.squarespace-cdn.com/content/v1/56b22cccb654f9062f18767b/1571413179902-TXCFVNVYE79WZ8MR9JI1/ke17ZwdGBToddI8pDm48kEd_cItpmLGocRCmcMGkfqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbPY7rrsO3luW_2oD5O7OD_ppKOTqLbA7PoNaCY-xWmcXejQve6EWhtsEXNp5cp4uw/MATTYBOVAN104_190913_SS20_054.jpg?format=500w',
              },
              {
                label: '',
                src: 'https://images.squarespace-cdn.com/content/v1/56b22cccb654f9062f18767b/1571413213417-DDJ9KZ8OS6DHSRM22KT1/ke17ZwdGBToddI8pDm48kK-RtfHK4dWKFZGMAsenhqB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWhaXEnukYEx-nYknHlYwB6oqZfXYfpHU3va4HWtPXy2qbQn8vVQ_opmIaE21ql8RQ/MATTYBOVAN104_190913_SS20_087.jpg?format=500w'
              },
              {
                label: '',
                src: 'https://images.squarespace-cdn.com/content/v1/56b22cccb654f9062f18767b/1571413321842-IBO59H8FSE0SFVYKSV08/ke17ZwdGBToddI8pDm48kEkxBFVuQYJC27otB6i4TMh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iy8Rj2bPXFyaluz0PeKicP7GUiYVgYm7egqlwkMJrmcHudgNH_AjpGmBM9uiUXRqg/MATTYBOVAN104_190913_SS20_205.jpg?format=500w'
              }
            ]
          }],
          pages: []
        }
      ]
    },
  ],
}
