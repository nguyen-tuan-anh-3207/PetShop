import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import shoppingCartFill from '@iconify/icons-eva/shopping-cart-fill';
// material
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { useGetQuantityCart } from '../../../reducers/cart/hook';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 }
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  const navigate = useNavigate();
  const totalQuantityCart = useGetQuantityCart();

  return (
    <RootStyle>
      <Badge
        showZero
        badgeContent={totalQuantityCart}
        color="error"
        max={99}
        onClick={() => navigate('/cart')}
      >
        <Icon icon={shoppingCartFill} width={24} height={24} />
      </Badge>
    </RootStyle>
  );
}
