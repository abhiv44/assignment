import * as React from "react"
import ImageGallery from 'react-image-gallery'
import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'
function ProductImageGallery(props) {
    const { items } = props
    return (
        <div>
            <ImageGallery
                items={items}
                showThumbnails={true}
                thumbnailPosition='left'
                showFullscreenButton={false}
                showPlayButton={false}
                showIndex={true}
                startIndex={0}
                showNav={false}
            />
        </div>
    )
}
export default (ProductImageGallery)