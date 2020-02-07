import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Pagination } from './style';
import ComicCard from '../../components/ComicCard';

export default function Home() {
  const [comics, setComics] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 0,
    total: 0,
    count: 0,
  });
  const { page = 0 } = useParams();
  let history = useHistory();

  function setPage(page) {
    if (page < 0) return;
    if (page * pagination.limit > pagination.total) return;
    history.push(`/comics/${page}`);
  }

  useEffect(() => {
    const fetchComics = async () => {
      const response = await api.get('/comics', {
        params: { offset: page * 20 },
      });
      const comics = response.data.data.results;
      const pagination = (({ offset, limit, total, count }) => ({
        offset,
        limit,
        total,
        count,
      }))(response.data.data);
      setPagination(pagination);
      setComics(comics);
    };
    fetchComics();
  }, [page]);

  return (
    <Container>
      {comics.map(comic => (
        <ComicCard
          key={comic.id}
          id={comic.id}
          image={
            comic.thumbnail.path +
            '/portrait_xlarge.' +
            comic.thumbnail.extension
          }
          title={comic.title}
          description={comic.description}
        />
      ))}
      <Pagination>
        {`mostrando de ${pagination.offset} a ${pagination.offset +
          pagination.count} (total de ${pagination.total} quadrinhos) `}
        <Button onClick={() => setPage(Number(page) - 1)}>{'<'}</Button>
        <Button onClick={() => setPage(Number(page) + 1)}>{'>'}</Button>
      </Pagination>
    </Container>
  );
}
