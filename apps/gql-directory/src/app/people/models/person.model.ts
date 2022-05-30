import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Person as IPerson } from '@aplus/shared/people/domain';
import { Phone } from './phone.model';

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

  @Field((returns) => [Phone], {
    nullable: true,
  })
  phones?: Phone[];
}
