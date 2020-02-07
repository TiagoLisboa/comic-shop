import React, { useState, useEffect } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import api from '../../services/api';

import { Container, RootCard, Picture, Footer } from './style';
import TruncateText from '../../components/TruncateText';

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

  return (
    <Container>
      {comics.map(comic => (
        <RootCard>
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
    </Container>
  );

  {
    /* return ( */
  }
  {
    /*   <Container> */
  }
  {
    /*     {comics.map(comic => ( */
  }
  {
    /*       <Card> */
  }
  {
    /*         <picture> */
  }
  {
    /*           <img */
  }
  {
    /*             src={ */
  }
  {
    /*               comic.thumbnail.path + */
  }
  {
    /*               '/portrait_xlarge.' + */
  }
  {
    /*               comic.thumbnail.extension */
  }
  {
    /*             } */
  }
  {
    /*           /> */
  }
  {
    /*         </picture> */
  }

  {
    /*         <div> */
  }
  {
    /*           <h3>{comic.title}</h3> */
  }
  {
    /*           <p>{comic.description}</p> */
  }
  {
    /*         </div> */
  }
  {
    /*       </Card> */
  }
  {
    /*     ))} */
  }
  {
    /*   </Container> */
  }
  // );
}
