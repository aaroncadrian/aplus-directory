import { Module } from '@nestjs/common';
import { CreatePersonCommandHandler } from './commands/create-person/create-person.command-handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [CreatePersonCommandHandler],
  exports: [CqrsModule, CreatePersonCommandHandler],
})
export class GqlDirectoryPeopleCqrsModule {}
