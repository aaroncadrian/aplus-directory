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
import {
  CreatePersonCommandInput,
  CreatePersonCommandOutput,
  ListPeopleCommandInput,
  ListPeopleCommandOutput,
} from '@aplus/gql-directory/people/cqrs';
import { CreatePersonInput } from './people/create-person.input';
import { customPlainToInstance } from './custom-plain-to-instance';
import Chance from 'chance';

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
  async describePerson(@Args('personId') personId: string): Promise<Person> {
    return generateFakePerson({
      id: personId,
    });
  }

  @ResolveField()
  middleName(@Parent() person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }

  @Query((returns) => [Person])
  async listPeople(): Promise<Person[]> {
    const result = await this.commandBus.execute<
      ListPeopleCommandInput,
      ListPeopleCommandOutput
    >(
      customPlainToInstance(ListPeopleCommandInput, {
        limit: 3,
      })
    );

    return result.records;
  }

  @Mutation((returns) => Person)
  async createPerson(
    @Args('input')
    input: CreatePersonInput
  ): Promise<Person> {
    const result = await this.commandBus.execute<
      CreatePersonCommandInput,
      CreatePersonCommandOutput
    >(
      customPlainToInstance(CreatePersonCommandInput, {
        firstName: input.firstName,
        lastName: input.lastName,
      })
    );

    return result.record;
  }
}
