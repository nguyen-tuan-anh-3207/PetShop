import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useGetAuth, useUpdateProfile } from '../reducers/user/hook';

export default function Profile() {
  const { user } = useGetAuth();
  const [onUpdateProfile] = useUpdateProfile();

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      address: user?.address,
      username: user?.username,
      phoneNumber: user?.phoneNumber
    },
    onSubmit: (values) => {
      onUpdateProfile({
        profileId: user?._id,
        data: {
          address: values.address,
          phoneNumber: values.phoneNumber
        }
      });
    }
  });
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <FormControl sx={{ m: 2 }}>
              <TextField type="email" label="Email" disabled {...getFieldProps('email')} />
            </FormControl>
            <FormControl sx={{ m: 2 }}>
              <TextField
                fullWidth
                multiline
                disabled
                type="username"
                label="Tên đăng nhập"
                {...getFieldProps('username')}
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
              <TextField
                fullWidth
                multiline
                type="address"
                label="Địa chỉ"
                {...getFieldProps('address')}
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ m: 2 }}>
              <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
                Cập nhật hồ sơ
              </LoadingButton>
            </FormControl>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
