import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
