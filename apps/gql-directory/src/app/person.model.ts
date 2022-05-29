import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'person',
})
export class Person {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  middleName?: string;

  @Field()
  lastName: string;
}
