import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Person as IPerson } from '@aplus/shared/people/domain';

@ObjectType({
  description: 'person',
})
export class Person implements IPerson {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  middleName?: string;

  @Field()
  lastName: string;
}
