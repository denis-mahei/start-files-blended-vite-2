import Grid from '../Grid/Grid.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem.jsx';

const PhotosGallery = ({ items }) => {
  return (
    <Grid>
      {items.map(item => (
        <GridItem key={item.id}>
          <PhotosGalleryItem {...item} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
