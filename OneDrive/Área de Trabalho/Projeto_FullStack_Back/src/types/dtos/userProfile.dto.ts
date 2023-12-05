/* eslint-disable @typescript-eslint/no-explicit-any */
import { IsOptional, IsString, IsUppercase, Length, MaxLength, MinLength } from 'class-validator';

export class UpdateUserProfileDto {
  @IsOptional()
  id?: number | null;

  @IsOptional()
  userId?: number | null;

  @IsString()
  @Length(4, 80)
  email?: string;

  @IsString()
  @MinLength(8)
  @MaxLength(80)
  password?: string;

  @Length(2, 50)
  firstName?: string;

  @Length(2, 50)
  lastName?: string;
  
  @MinLength(14)
  @MaxLength(15)
  phone?: string;

  @Length(4, 256)
  address?: string;

  @Length(2)
  @IsUppercase()
  state?: string;

  @Length(2, 100)
  city?: string;

  @Length(8)
  zipCode?: string;

  @IsOptional()
  @Length(0, 512)
  about?: string | null;

  @Length(0, 11)
  cpf?: string;

  @IsOptional()
  avatarImg?: string;

  @IsOptional()
  isActive?: boolean;
}
