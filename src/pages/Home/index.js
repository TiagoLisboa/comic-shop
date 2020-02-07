import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Home() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await api.get('/comics');
      const comics = response.data.data.results;

      setComics(comics);
    };
    fetchComics();
  }, []);

  return comics.map(comic => (
    <div key={comic.id}>
      <img
        src={
          comic.thumbnail.path + '/portrait_xlarge.' + comic.thumbnail.extension
        }
      />
      {comic.title}
    </div>
  ));
}
