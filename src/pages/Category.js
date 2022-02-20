import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
//
import CategoryCard from '../components/_dashboard/category';
import CATEGORIES from '../_mocks_/category';

// ----------------------------------------------------------------------

export default function Category() {
  return (
    <Page title="Home: Category | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Category
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {CATEGORIES.map((post, index) => (
            <CategoryCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
