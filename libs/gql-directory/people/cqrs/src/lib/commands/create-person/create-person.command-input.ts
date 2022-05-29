import { ICommand } from '@nestjs/cqrs';

export class CreatePersonCommandInput implements ICommand {
  firstName: string;

  lastName: string;
}
