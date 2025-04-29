import Text from '../components/Text/Text';
import SearchForm from '../components/SearchForm/SearchForm.jsx';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery.jsx';
import { useEffect, useState } from 'react';
import { getPhotos } from '../apiService/photos.js';
import Button from '../components/Button/Button.jsx';
import Loader from '../components/Loader/Loader.jsx';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getQuery = inputValue => {
    setQuery(inputValue);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setImages(prev =>
          page === 1 ? data.photos : [...prev, ...data.photos]
        );
      } catch (e) {
        console.log('Error: ', e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <SearchForm onSubmit={getQuery} />
      {isLoading && <Loader />}
      {images.length > 0 && <PhotosGallery items={images} />}
      {images.length > 0 && <Button>Load More</Button>}
    </>
  );
};

export default Photos;
