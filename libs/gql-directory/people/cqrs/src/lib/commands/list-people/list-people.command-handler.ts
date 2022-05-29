import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ListPeopleCommandInput } from './list-people.command-input';
import { generateUniqueId } from '@aplus/shared/util-ids';
import { ListPeopleCommandOutput } from './list-people.command-output';
import { range } from 'lodash';
import { Person } from '@aplus/shared/people/domain';
import Chance from 'chance';

const chance = new Chance();

const generateFakePerson = (props: { id: string }): Person => ({
  id: props.id,
  firstName: chance.first(),
  lastName: chance.last(),
});

@CommandHandler(ListPeopleCommandInput)
export class ListPeopleCommandHandler
  implements ICommandHandler<ListPeopleCommandInput, ListPeopleCommandOutput>
{
  async execute(
    command: ListPeopleCommandInput
  ): Promise<ListPeopleCommandOutput> {
    const { limit } = command;

    return {
      records: range(limit ?? 5).map(() =>
        generateFakePerson({
          id: generateUniqueId(),
        })
      ),
    };
  }
}
