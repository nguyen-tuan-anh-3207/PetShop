import { Grid, Divider } from '@mui/material';

export default function CartProductHeader() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={4} item>
          Sản phẩm
        </Grid>
        <Grid xs={4} item>
          Số lượng
        </Grid>
        <Grid xs={2} item>
          Tổng
        </Grid>
        <Grid xs={2} item>
          Hành động
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
