import {User} from './user.interface';
import {Tag} from './tag.interface';

export interface BlogMessage {
  id: number;
  localDateTime: string;
  content: string;
  likes: number;
  user: User;
  tags: Tag[];
}
