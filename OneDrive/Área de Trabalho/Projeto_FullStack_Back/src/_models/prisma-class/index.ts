import { User as _User } from './user';
import { UserProfile as _UserProfile } from './user_profile';

export namespace PrismaModel {
  export class User extends _User {}
  export class UserProfile extends _UserProfile {}

  export const extraModels = [User, UserProfile];
}
