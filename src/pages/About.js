import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from '../components/Page';

const About = styled(Page)(({ theme }) => ({
  // display: 'flex',
  minHeight: '100%',
  border: '1px solid',
  textAlign: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10)
}));

export default function AboutPage() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <About>
          <Typography variant="h4">Liên hệ chúng tôi</Typography>
          <Typography variant="p">0123456789</Typography>
        </About>
      </Grid>

      <Grid item xs={3}>
        <About>
          <Typography variant="h4">About us</Typography>
          <Typography variant="p">Instagram: @petshop_store</Typography>
          <br />
          <Typography variant="p">Facebook: Petshop Store</Typography>
          <br />
          <Typography variant="p">Shopee: petshop_store</Typography>
        </About>
      </Grid>
      <Grid item xs={3}>
        <About>
          <Typography variant="h4">Chính sách</Typography>
          <Typography variant="p">Chính sách đổi hàng</Typography>
          <br />
          <Typography variant="p">Chính sách bảo hành</Typography>
          <br />
          <Typography variant="p">Chính sách bảo mật</Typography>
        </About>
      </Grid>
      <Grid item xs={3}>
        <About>
          <Typography variant="h4">Our stores</Typography>
          <Typography variant="p">62 Nguyen Trai, Q1, TPHCM</Typography>
          <br />
          <Typography variant="p">100 Ba Trieu</Typography>
          <br />
          <Typography variant="p">10B14 Pham Ngoc Thach</Typography>
        </About>
      </Grid>
    </Grid>
  );
}
