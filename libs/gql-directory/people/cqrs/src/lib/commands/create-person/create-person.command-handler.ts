import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommandInput } from './create-person.command-input';
import { generateUniqueId } from '@aplus/shared/util-ids';
import { CreatePersonCommandOutput } from './create-person.command-output';

@CommandHandler(CreatePersonCommandInput)
export class CreatePersonCommandHandler
  implements
    ICommandHandler<CreatePersonCommandInput, CreatePersonCommandOutput>
{
  async execute(
    command: CreatePersonCommandInput
  ): Promise<CreatePersonCommandOutput> {
    return {
      record: {
        id: generateUniqueId(),
        firstName: command.firstName,
        lastName: command.lastName,
      },
    };
  }
}
