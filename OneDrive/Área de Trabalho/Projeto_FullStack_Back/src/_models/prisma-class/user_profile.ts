import { User } from './user';


export class UserProfile {
  
  id: number = undefined;

  
  user: User = undefined;

 
  userId: number = undefined;

  
  firstName?: string = undefined;

  
  lastName?: string = undefined;


  cpf?: string = undefined;

 
  state?: string = undefined;

  
  zipCode?: string = undefined;

  
  city?: string = undefined;

  
  address?: string = undefined;

 
  about?: string = undefined;

 
  avatarImg?: string = 'default_avatar.jpg';

 
  createdAt: Date = undefined;

  
  updatedAt: Date = undefined;
}
