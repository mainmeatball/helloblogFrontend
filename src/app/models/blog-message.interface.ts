import {User} from './user.interface';
import {Tags} from './tags.interface';

export interface BlogMessage {
  id: number;
  localDateTime: string;
  content: string;
  likes: number;
  user: User;
  tags: Tags[];
}
