import { Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';

import * as Yup from 'yup';
import { useGetCart } from '../reducers/cart/hook';
import { getInfoOrder } from '../utils/order';
import { useGetAuth } from '../reducers/user/hook';
import { useCreateOrder } from '../reducers/order/hook';

const CheckoutSchema = Yup.object().shape({
  address: Yup.string().required(' Address is required'),
  phoneNumber: Yup.string().required('Phone number is required')
});

export default function Checkout() {
  const [totalAmount, cart] = useGetCart();
  const { user } = useGetAuth();
  const [onCreateOrder] = useCreateOrder();

  const order = getInfoOrder({ totalAmount, cart, user });

  const formik = useFormik({
    initialValues: {
      address: user?.address ?? '',
      phoneNumber: user?.phoneNumber ?? ''
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      onCreateOrder({
        ...values,
        ...order
      });
    }
  });
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } = formik;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h3">Tên sản phẩm</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">Số lượng</Typography>
            </Grid>
          </Grid>
          {cart?.map((item) => (
            <>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {item.name}
                </Grid>
                <Grid item xs={6}>
                  {item.quantity}
                </Grid>
              </Grid>
              <Divider />
            </>
          ))}
        </Grid>
        <Grid container>
          <Grid item xs={9}>
            Tổng tiền : {totalAmount}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <FormControl sx={{ m: 2 }}>
              <TextField
                type="address"
                label="Địa chỉ"
                {...getFieldProps('address')}
                error={Boolean(touched.address && errors.address)}
                helperText={touched.address && errors.address}
              />
            </FormControl>
            <FormControl sx={{ m: 2 }}>
              <TextField
                fullWidth
                multiline
                type="phoneNumber"
                label="Số điện thoại"
                {...getFieldProps('phoneNumber')}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
            </FormControl>

            <FormControl sx={{ m: 2 }}>
              <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
                Tạo đơn hàng
              </LoadingButton>
            </FormControl>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
}
