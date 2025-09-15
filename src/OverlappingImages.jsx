
import './OverlappingImages.css'

const OverlappingImages = () => {
  return (
    <div className="banner-bg">
      <div className="list-wrapper">
        <div className="list">
          <img src="/ramen-img.png" alt="Image 1" className="item" />
          <img src="/ramen-img.png" alt="Image 2" className="item" />
          <img src="/ramen-img.png" alt="Image 3" className="item center" />
          <img src="/ramen-img.png" alt="Image 4" className="item" />
          <img src="/ramen-img.png" alt="Image 5" className="item" />
        </div>
      </div>
    </div>
  )
}

export default OverlappingImages
