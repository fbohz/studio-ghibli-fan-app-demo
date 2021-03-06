const INITIAL_STATE =  {
    sections: [
        {
          title: 'memorabilia',
          imageUrl: 'https://i.ibb.co/BydFmjr/shop.jpg',
          id: 1,
          linkUrl: 'shop/memorabilia',
          subtitle: 'SHOP NOW'
        },
        {
            title: 'characters',
            imageUrl: 'https://i.ibb.co/xHSCYkX/characters.jpg',
            id: 2,
            linkUrl: 'characters'
        },
        {
            title: 'news',
            imageUrl: 'https://i.ibb.co/bRVtBYz/news-nausicaa.jpg',
            id: 3,
            linkUrl: 'news'
        },
        {
          title: 'selected films',
          imageUrl: 'https://i.ibb.co/1rqTmMB/films.jpg',
          id: 4,
          size: 'large',
          linkUrl: 'shop/films',
          subtitle: 'SHOP NOW'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer