import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DescribePersonCommandInput } from './describe-person.command-input';
import { DescribePersonCommandOutput } from './describe-person.command-output';
import { Person } from '@aplus/shared/people/domain';
import Chance from 'chance';

const chance = new Chance();

const generateFakePerson = (props: { id: string }): Person => ({
  id: props.id,
  firstName: chance.first(),
  lastName: chance.last(),
});

@CommandHandler(DescribePersonCommandInput)
export class DescribePersonCommandHandler
  implements
    ICommandHandler<DescribePersonCommandInput, DescribePersonCommandOutput>
{
  async execute(
    command: DescribePersonCommandInput
  ): Promise<DescribePersonCommandOutput> {
    const { personId } = command;

    return {
      record: generateFakePerson({
        id: personId,
      }),
    };
  }
}
