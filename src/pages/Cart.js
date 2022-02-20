// material
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import CartProductHeader from '../components/_dashboard/cart/CartProductHeader';

const Item = styled('div')(({ theme }) => ({
  // ...theme.typography.body2,
  borderBottom: '1px solid #73818e',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px'
  // textAlign: 'center'
}));

export default function Cart() {
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
          <Grid item xs={12}>
            <Item>
              <Grid container>
                <Grid xs={4} item>
                  <Grid container>
                    <Grid item xs={2}>
                      <Avatar variant="rounded" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>abc</Typography>
                      <Typography>Stock : 59</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={4} item>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Button disableElevation>
                      <RemoveIcon />
                    </Button>
                    <p>5</p>
                    <Button disableElevation>
                      <AddIcon />
                    </Button>
                  </Stack>
                </Grid>
                <Grid xs={2} item>
                  3
                </Grid>
                <Grid xs={2} item>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Grid container>
                <Grid xs={4} item>
                  <Grid container>
                    <Grid item xs={2}>
                      <Avatar variant="rounded" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>abc</Typography>
                      <Typography>Stock : 59</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={4} item>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Button disableElevation>
                      <RemoveIcon />
                    </Button>
                    <p>5</p>
                    <Button disableElevation>
                      <AddIcon />
                    </Button>
                  </Stack>
                </Grid>
                <Grid xs={2} item>
                  3
                </Grid>
                <Grid xs={2} item>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Grid container>
                <Grid xs={4} item>
                  <Grid container>
                    <Grid item xs={2}>
                      <Avatar variant="rounded" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography>abc</Typography>
                      <Typography>Stock : 59</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={4} item>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Button disableElevation>
                      <RemoveIcon />
                    </Button>
                    <p>5</p>
                    <Button disableElevation>
                      <AddIcon />
                    </Button>
                  </Stack>
                </Grid>
                <Grid xs={2} item>
                  3
                </Grid>
                <Grid xs={2} item>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                Total Amount : 200
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
