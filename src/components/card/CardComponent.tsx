import './CardComponent.css';
import React, { Component } from 'react';
import CardItem from '../../data/CardItem';
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';

class CardComponent extends Component<{ card: CardItem }> {
  public render(): JSX.Element {
    return (
      <Card className="card" sx={{ padding: 1, width: 300, margin: 1 }}>
        <CardHeader className="card__title" title={this.props.card.title} />
        <CardMedia
          className="card__image"
          component="img"
          height="194"
          image={this.props.card.imageURL}
          alt={this.props.card.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {this.props.card.desc}
          </Typography>
        </CardContent>

        <CardActions className="card__container" disableSpacing>
          <div className="card__container-likes">
            <FavoriteIcon></FavoriteIcon>
            {this.props.card.likes}
          </div>

          <div className="card__container-views">
            <VisibilityIcon></VisibilityIcon>
            {this.props.card.views}
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default CardComponent;
