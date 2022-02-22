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
import { useCart } from '../../../reducers/cart/hook';
import { fCurrency } from '../../../utils/formatNumber';

const Item = styled('div')(({ theme }) => ({
  // ...theme.typography.body2,
  borderBottom: '1px solid #73818e',
  color: theme.palette.text.secondary,

  lineHeight: '60px'
}));

export default function CartProductItem({ cart }) {
  const [onAddToCart, onDecreaseProduct, onRemoveToCart] = useCart();
  return (
    <Grid item xs={12}>
      <Item>
        <Grid container>
          <Grid xs={4} item>
            <Grid container>
              <Grid item xs={2}>
                <Avatar variant="rounded" src={cart.cover} />
              </Grid>
              <Grid item xs={10}>
                <Typography>{cart.name}</Typography>
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
              <Button disableElevation disabled={cart.quantity === 1}>
                <RemoveIcon onClick={() => onDecreaseProduct(cart.id)} />
              </Button>
              <p>{cart.quantity}</p>
              <Button disableElevation disabled={cart.quantity === 10}>
                <AddIcon onClick={() => onAddToCart(cart)} />
              </Button>
            </Stack>
          </Grid>
          <Grid xs={2} item>
            {fCurrency(cart.quantity * cart.price)}
          </Grid>
          <Grid xs={2} item>
            <IconButton>
              <DeleteIcon color="error" onClick={() => onRemoveToCart(cart.id)} />
            </IconButton>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}
