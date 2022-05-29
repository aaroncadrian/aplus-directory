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

@Resolver((of) => Person)
export class PeopleResolver {
  constructor(private commandBus: CommandBus) {}

  @Query((returns) => Person)
  async person(@Args('personId') personId: string): Promise<Person> {
    return {
      id: 'DEMO_ID',
      firstName: 'Demo First',
      lastName: 'Demo Last',
    };
  }

  @ResolveField()
  middleName(@Parent() person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }

  @Query((returns) => [Person])
  async people(): Promise<Person[]> {
    return [];
  }

  @Mutation(() => Person)
  async createPerson(@Args('input') input: CreatePersonInput): Promise<Person> {
    return this.commandBus.execute(
      customPlainToInstance(CreatePersonCommandInput, {
        firstName: input.firstName,
        lastName: input.lastName,
      })
    );
  }
}
