import React from 'react';
import ReactPlayer from 'react-player'
import { Carousel } from 'antd';

const sortMedia = (a, b) => {
  if (Number(a.position) > Number(b.position)) {
    return 1;
  } else if (Number(a.position) < Number(b.position)) {
    return -1;
  } else {
    return 0;
  }
};

const ProductMedia = ({ media }) => {
  return (
    <Carousel>
      {(media && media.length > 0) ? media.sort(sortMedia).map((mediaItem) => {
        if (mediaItem.type_media === 'video') {
          return (
            <div>
              <ReactPlayer
                url={mediaItem.url}
                controls
                width={'100%'}
                height={360}
              />
            </div>
          );
        }
        return (
          <div>
            <img
              className="product-img"
              src={mediaItem.url}
              alt={mediaItem.url}
            />
          </div>
        )
      })
        : (
          <div>
            <img
              className="product-img"
              src="https://cdnb.artstation.com/p/assets/images/images/001/565/573/large/vyacheslav-ledenev-mcduck-isometric-foodps.jpg?1448653179"
              alt="food-placeholder"
            />
          </div>
        )}
    </Carousel>
  )
}

export default ProductMedia;
