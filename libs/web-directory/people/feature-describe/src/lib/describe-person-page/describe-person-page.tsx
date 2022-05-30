import { useDescribePerson } from './use-describe-person';

export interface DescribePersonPageProps {
  personId: string | undefined;
}

export const DescribePersonPage = (props: DescribePersonPageProps) => {
  const { personId } = props;

  const { loading, data } = useDescribePerson({
    personId,
  });

  if (loading) {
    return <div>loading person...</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
