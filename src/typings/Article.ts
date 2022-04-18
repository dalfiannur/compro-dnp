import { User } from "./User";

export interface Article {
  title: string;
  slug: string;
  content: string;
  isFeatured: boolean;
  thumbnail: string;
  thumbnailUrl: string;
  createdAt: Date;
  user: User;
}