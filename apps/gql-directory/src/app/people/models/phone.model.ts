import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Phone as IPhone } from '@aplus/shared/people/domain';

@ObjectType({
  description: 'phone',
})
export class Phone implements IPhone {
  @Field((type) => ID)
  id: string;

  @Field()
  phoneNumber: string;

  @Field({
    nullable: true,
  })
  phoneType?: string;
}
