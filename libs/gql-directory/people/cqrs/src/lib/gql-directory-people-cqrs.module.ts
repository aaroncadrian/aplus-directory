import { Module } from '@nestjs/common';
import { CreatePersonCommandHandler } from './commands/create-person/create-person.command-handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ListPeopleCommandHandler } from './commands/list-people/list-people.command-handler';

@Module({
  imports: [CqrsModule],
  providers: [CreatePersonCommandHandler, ListPeopleCommandHandler],
  exports: [CqrsModule],
})
export class GqlDirectoryPeopleCqrsModule {}
