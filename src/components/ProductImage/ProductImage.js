import './ProductImage.css'

const ProductImage = ({src, alt}) => {
  return (
    <img className={'productImage'} src={src} alt={alt} />
  )
}

export default ProductImage;