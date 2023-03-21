import CardItem from '../data/CardItem';

class CardModel {
  public getCards(): CardItem[] {
    return [
      {
        number: '0',
        imageURL: '/assets/cabbage.png',
        title: 'cabbage',
        desc: 'tasty cabbage',
        likes: 10,
        views: 1000,
      },
      {
        number: '1',
        imageURL: '/assets/carrot.png',
        title: 'carrot',
        desc: 'good carrot',
        likes: 31,
        views: 342,
      },
      {
        number: '2',
        imageURL: '/assets/potato.png',
        title: 'potato',
        desc: 'good potato',
        likes: 83,
        views: 740,
      },
      {
        number: '3',
        imageURL: '/assets/tomato.png',
        title: 'tomato',
        desc: 'good tomato',
        likes: 58,
        views: 783,
      },
    ] as CardItem[];
  }
}

export default CardModel;
