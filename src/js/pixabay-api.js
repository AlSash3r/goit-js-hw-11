export function fetchImages(value) {
  const API_KEY = '47671198-bf70cd038d5f77d4168ecf4e9'; 
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText || 'Something went wrong');
      }
      return response.json();
    })
    .then(obj => {
      if (!obj.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please, try again'
        );
      }
      return obj;
    });
}
