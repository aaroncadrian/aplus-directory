import { ICommand } from '@nestjs/cqrs';

export class ListPeopleCommandInput implements ICommand {
  limit?: number;
}
