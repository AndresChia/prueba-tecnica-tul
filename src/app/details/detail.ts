import { Photo } from '../performance/photo';

export interface Detail {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  image?: Photo;
}
