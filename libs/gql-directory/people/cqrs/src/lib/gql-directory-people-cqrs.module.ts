import { Module } from '@nestjs/common';
import { CreatePersonCommandHandler } from './commands/create-person/create-person.command-handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ListPeopleCommandHandler } from './commands/list-people/list-people.command-handler';
import { DescribePersonCommandHandler } from './commands/describe-person/describe-person.command-handler';

@Module({
  imports: [CqrsModule],
  providers: [
    ListPeopleCommandHandler,
    DescribePersonCommandHandler,
    CreatePersonCommandHandler,
  ],
  exports: [CqrsModule],
})
export class GqlDirectoryPeopleCqrsModule {}
