import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Person } from './person.model';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePersonCommandInput } from '@aplus/gql-directory/people/cqrs';
import { CreatePersonInput } from './people/create-person.input';
import { customPlainToInstance } from './custom-plain-to-instance';
import Chance from 'chance';
import { range } from 'lodash';
import { nanoid } from 'nanoid';

const chance = new Chance();

const generateFakePerson = (props: { id: string }): Person => ({
  id: props.id,
  firstName: chance.first(),
  lastName: chance.last(),
});

@Resolver((of) => Person)
export class PeopleResolver {
  constructor(private commandBus: CommandBus) {}

  @Query((returns) => Person)
  async person(@Args('personId') personId: string): Promise<Person> {
    return generateFakePerson({
      id: personId,
    });
  }

  @ResolveField()
  middleName(@Parent() person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }

  @Query((returns) => [Person])
  async people(): Promise<Person[]> {
    return range(5).map(() =>
      generateFakePerson({
        id: nanoid(),
      })
    );
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('input')
    input: CreatePersonInput
  ): Promise<Person> {
    return this.commandBus.execute(
      customPlainToInstance(CreatePersonCommandInput, {
        firstName: input.firstName,
        lastName: input.lastName,
      })
    );
  }
}
