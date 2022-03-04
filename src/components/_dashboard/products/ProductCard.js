import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Icon } from '@iconify/react';

import { Box, Card, Link, Typography, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';

import ColorPreview from '../../ColorPreview';
import { useCart } from '../../../reducers/cart/hook';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { name, image, price, colors, _id } = product;

  const [onAddToCart] = useCart();

  const handleClick = () => {
    onAddToCart({
      ...product,
      stock: product.quantity,
      quantity: 1
    });
  };

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={name} src={image?.url} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={`/product/${_id}`} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <IconButton>
            <Icon icon="eva:shopping-cart-outline" onClick={handleClick} />
          </IconButton>
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">{fCurrency(price)}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
