import { Box, CardMedia, Card } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function Item({ src }) {
  return (
    <Card>
      <CardMedia component="img" height="500" image={src} alt="Paella dish" />
    </Card>
  );
}

const images = [
  {
    src: '/static/banner/pet-banner.jpg',
    alt: ''
  },
  {
    src: '/static/banner/pet-shop-banner.jpg',
    alt: ''
  },
  {
    src: 'https://loremflickr.com/1000/500/dog',
    alt: ''
  }
];

export default function BannerSlide() {
  return (
    <Box>
      <Carousel>
        {images.map((image, index) => (
          <Item key={index} src={image.src} />
        ))}
      </Carousel>
    </Box>
  );
}
