export interface IReview {
  name: string;
  date: string;
  review: string;
  rating: number;
}

export interface IGame {
  id: number;
  title: string;
  image: string;
  genre: string;
  description: string;
  trailer: string;
  reviews: IReview[];
}
