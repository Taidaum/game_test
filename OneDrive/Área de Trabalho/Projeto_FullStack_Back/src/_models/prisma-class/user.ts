import { UserProfile } from './user_profile';


export class User {
 
  id: number = undefined;

  
  email: string = undefined;

 
  phone?: string = undefined;

 
  password: string = undefined;

  
  isActive: boolean = true;

  
  createdAt: Date = undefined;

 
  updatedAt: Date = undefined;

  
  deletedAt?: Date = undefined;

  
  profile?: UserProfile = undefined;
}
