import { Grid, Divider } from '@mui/material';

export default function CartProductHeader() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={4} item>
          Product
        </Grid>
        <Grid xs={4} item>
          Quantity
        </Grid>
        <Grid xs={2} item>
          Sub Total
        </Grid>
        <Grid xs={2} item>
          Action
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
