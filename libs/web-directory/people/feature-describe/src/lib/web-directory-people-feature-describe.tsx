import { DescribePersonPage } from './describe-person-page/describe-person-page';
import { useParams } from 'react-router-dom';

export function WebDirectoryPeopleFeatureDescribe() {
  const { personId } = useParams<{ personId: string }>();

  return <DescribePersonPage personId={personId} />;
}

export default WebDirectoryPeopleFeatureDescribe;
