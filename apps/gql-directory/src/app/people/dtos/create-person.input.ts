import { Field, InputType } from '@nestjs/graphql';
import { PhoneInput } from './phone.input';
import { PostalAddressInput } from './postal-address.input';

@InputType()
export class CreatePersonInput {
  @Field()
  emailAddress: string;

  @Field()
  firstName: string;

  @Field({
    nullable: true,
  })
  middleName?: string;

  @Field()
  lastName: string;

  @Field({
    nullable: true,
  })
  preferredName?: string;

  @Field((returns) => [PhoneInput], {
    nullable: true,
  })
  phones?: PhoneInput[];

  @Field({
    nullable: true,
  })
  postalAddress?: PostalAddressInput;
}
