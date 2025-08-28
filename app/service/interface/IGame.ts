export interface IReview {
  name: string;
  date: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface IGame {
  id: number;
  title: string;
  image: string;
  genre: string;
  description: string;
  trailer: string;
  backImage: string;
  reviews: IReview[];
}
