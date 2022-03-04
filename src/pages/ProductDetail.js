import { useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import { useGetProduct } from '../reducers/product/hook';

export default function ProductDetail() {
  const [product] = useGetProduct();

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
        <Typography>{`Quantity : ${product?.quantity}`}</Typography>
      </Grid>
    </Grid>
  );
}
