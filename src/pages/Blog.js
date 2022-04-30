// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSearch } from '../components/_dashboard/blog';
import { useGetBlogs } from '../reducers/blog/hook';
//
import POSTS from '../_mocks_/blog';

export default function Blog() {
  const [data] = useGetBlogs();

  return (
    <Page title="Home: Blog | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
        </Stack>

        <Grid container spacing={3}>
          {data?.map((post, index) => (
            <BlogPostCard key={post._id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
