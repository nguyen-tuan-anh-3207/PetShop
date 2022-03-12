// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
//
import CategoryCard from '../components/_dashboard/category';
import { useGetCategories } from '../reducers/category/hook';

// ----------------------------------------------------------------------

export default function Category() {
  const [categories] = useGetCategories();

  return (
    <Page title="Home: Category | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Loại sản phẩm
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {categories?.map((category, index) => (
            <CategoryCard key={category._id} category={category} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
