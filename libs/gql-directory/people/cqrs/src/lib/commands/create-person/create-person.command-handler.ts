import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommandInput } from './create-person.command-input';
import { generateUniqueId } from '@aplus/shared/util-ids';

@CommandHandler(CreatePersonCommandInput)
export class CreatePersonCommandHandler
  implements ICommandHandler<CreatePersonCommandInput>
{
  async execute(command: CreatePersonCommandInput): Promise<unknown> {
    return {
      id: generateUniqueId(),
      firstName: command.firstName,
      lastName: command.lastName,
    };
  }
}
