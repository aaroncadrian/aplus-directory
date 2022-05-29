import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommandInput } from './create-person.command-input';
import { nanoid } from 'nanoid';

@CommandHandler(CreatePersonCommandInput)
export class CreatePersonCommandHandler
  implements ICommandHandler<CreatePersonCommandInput>
{
  async execute(command: CreatePersonCommandInput): Promise<unknown> {
    return {
      id: nanoid(),
      firstName: command.firstName,
      lastName: command.lastName,
    };
  }
}
