import { ICommand } from '@nestjs/cqrs';

export class DescribePersonCommandInput implements ICommand {
  personId: string;
}
