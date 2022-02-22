// material
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import CartProductHeader from '../components/_dashboard/cart/CartProductHeader';
import CartProductItem from '../components/_dashboard/cart/CartProductItem';
import { useGetCart } from '../reducers/cart/hook';

export default function Cart() {
  const [totalAmount, cart] = useGetCart();
  return (
    <Page title="Home: Cart | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Cart
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CartProductHeader />
          </Grid>
          {cart.map((cart) => (
            <CartProductItem key={cart.id} cart={cart} />
          ))}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                Total Amount : {totalAmount}
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="success" fullWidth>
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
