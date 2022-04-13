import './ProductPrice.css';

const ProductPrice = ({prices}) => {
  return (
    <div className={'productPrices'}>
      <i className={'productPrices__old'}>
        {'oldPrice' in prices ? `$ ${prices.oldPrice}` : ' '}
      </i>
      <strong className={'productPrices__new'}>
        {prices.priceNow}
      </strong>
    </div>
  )
}

export default ProductPrice;