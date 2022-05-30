import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostalAddressInput {
  @Field()
  line1: string;

  @Field({
    nullable: true,
  })
  line2?: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field({
    nullable: true,
  })
  country?: string;
}
