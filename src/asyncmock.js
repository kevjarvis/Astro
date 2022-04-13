const products = [
  { id: '1', title: 'Telescope 1 Novel Category hacking', category: 'aficionado', description: 'This is a description of Telescope 1', stock: 11, prices: {oldPrice: 2000, priceNow: 1500}, rating: 4.5, pictureUrl: 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Ffoto5-a29230a4-ac48-4c9c-bf52-2852afd69cad.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=593883f3f04dad91246782ad98af06ff' },
  { id: '2', title: 'Telescope 2', category: 'aficionado', description: 'This is a description of Telescope 2', stock: 0, prices: {priceNow: 3000}, rating: 3.56,  pictureUrl: 'https://m.media-amazon.com/images/I/810IhV6aMNL._AC_SX425_.jpg' },
  { id: '3', title: 'Telescope 3', category: 'profesional', description: 'This is a description of Telescope 3', stock: 23, prices: {oldPrice: 10000, priceNow: 8500}, rating: 2.3, pictureUrl: 'https://www.telescopioschile.cl/wp-content/uploads/2020/07/Telescopio-Celestron-PowerSeeker-80EQ.jpg' }
];

export const API = new Promise ( resolve => {
  setTimeout(() => {
    resolve(products)
  }, 2000)
} );

export const getProductByID = (id) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, 2000)
  })
}