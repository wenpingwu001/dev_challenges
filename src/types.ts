type PageStatus = 'idle' | 'loading' | 'success' | 'error';
interface Coffee {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}
export type { Coffee ,PageStatus};
