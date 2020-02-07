import React, { useState, useEffect } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, RootCard, Picture, Footer, Navigation } from './style';
import TruncateText from '../../components/TruncateText';

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
    history.push(`/${page}`);
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
        <RootCard key={comic.id}>
          <CardActionArea>
            <Picture
              image={
                comic.thumbnail.path +
                '/portrait_xlarge.' +
                comic.thumbnail.extension
              }
              title={comic.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {comic.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <TruncateText text={comic.description} />
              </Typography>
            </CardContent>
          </CardActionArea>
          <Footer>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Footer>
        </RootCard>
      ))}
      <Navigation>
        {`mostrando de ${pagination.offset} a ${pagination.offset +
          pagination.count} (total de ${pagination.total} quadrinhos) `}
        <Button onClick={() => setPage(Number(page) - 1)}>{'<'}</Button>
        <Button onClick={() => setPage(Number(page) + 1)}>{'>'}</Button>
      </Navigation>
    </Container>
  );
}
