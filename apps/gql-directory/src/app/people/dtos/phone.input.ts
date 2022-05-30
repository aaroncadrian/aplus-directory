import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PhoneInput {
  @Field()
  phoneNumber: string;

  @Field({
    nullable: true,
  })
  phoneType?: string;
}
