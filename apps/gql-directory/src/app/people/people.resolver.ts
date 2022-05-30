import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Person } from './models/person.model';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePersonCommandInput,
  CreatePersonCommandOutput,
  DescribePersonCommandInput,
  DescribePersonCommandOutput,
  ListPeopleCommandInput,
  ListPeopleCommandOutput,
} from '@aplus/gql-directory/people/cqrs';
import { CreatePersonInput } from './dtos/create-person.input';
import { customPlainToInstance } from '../utils/custom-plain-to-instance';
import { Phone } from './models/phone.model';

@Resolver((of) => Person)
export class PeopleResolver {
  constructor(private commandBus: CommandBus) {}

  @Query((returns) => Person)
  async describePerson(
    @Args('personId', {
      type: () => ID,
    })
    personId: string
  ): Promise<Person> {
    const result = await this.commandBus.execute<
      DescribePersonCommandInput,
      DescribePersonCommandOutput
    >(
      customPlainToInstance(DescribePersonCommandInput, {
        personId,
      })
    );

    return result.record;
  }

  @ResolveField()
  middleName(@Parent() person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }

  @ResolveField()
  phones(@Parent() person: Person): Phone[] {
    return [];
  }

  @Query((returns) => [Person])
  async listPeople(
    @Args('limit', {
      nullable: true,
    })
    limit: number | undefined
  ): Promise<Person[]> {
    const result = await this.commandBus.execute<
      ListPeopleCommandInput,
      ListPeopleCommandOutput
    >(
      customPlainToInstance(ListPeopleCommandInput, {
        limit,
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
