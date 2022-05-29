import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Person } from './person.model';

@Resolver((of) => Person)
export class PeopleResolver {
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
  async createPerson(): Promise<Person> {
    return {
      id: 'DEMO_I_@D',
      firstName: 'Created person first',
      lastName: 'Created person Last',
    };
  }
}
