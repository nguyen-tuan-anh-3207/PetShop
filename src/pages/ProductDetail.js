import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, Button } from '@mui/material';
import { ProductCartWidget } from '../components/_dashboard/products';
import { useGetProduct } from '../reducers/product/hook';
import { useCart } from '../reducers/cart/hook';

export default function ProductDetail() {
  const [product] = useGetProduct();
  const [onAddToCart] = useCart();

  const handleClick = () => {
    onAddToCart({
      ...product,
      stock: product.quantity,
      quantity: 1
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <Card>
          <CardMedia component="img" height="500" image={product?.image?.url} alt="Paella dish" />
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h3">{product?.name}</Typography>
        <Typography>{product?.description}</Typography>
        <Typography>{`Số lượng : ${product?.quantity}`}</Typography>
        <Typography>{`Giá: ${product?.price}`}</Typography>
        <Button variant="contained" color="success" fullWidth onClick={handleClick}>
          Mua ngay
        </Button>
      </Grid>
      <ProductCartWidget />
    </Grid>
  );
}
