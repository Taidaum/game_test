import {
  IsEmail,
  IsLowercase,
  IsOptional,
  IsPhoneNumber,
  IsUppercase,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsEmail()
  @IsLowercase()
  email?: string;

  @IsOptional()
  @Length(2, 50)
  firstName?: string;

  @IsOptional()
  @Length(2, 50)
  lastName?: string;

  @IsOptional()
  @Length(2, 50)
  phone?: string;

  @IsOptional()
  @Length(4, 256)
  address?: string;

  @IsOptional()
  @Length(2, 50)
  country?: string;

  @IsOptional()
  @Length(2)
  @IsUppercase()
  state?: string;

  @IsOptional()
  @Length(2, 100)
  city?: string;

  @IsOptional()
  @Length(8)
  zipCode?: string;

  @IsOptional()
  @Length(0, 512)
  about?: string;

  @IsOptional()
  @Length(0, 11)
  cpf?: string;

  @IsOptional()
  avatarImg?: string;

  @IsOptional()
  accessProfileId?: any;

  @IsOptional()
  isActive?: boolean;
}
