import styles from './web-directory-people-feature-list.module.scss';

/* eslint-disable-next-line */
export interface WebDirectoryPeopleFeatureListProps {}

export function WebDirectoryPeopleFeatureList(
  props: WebDirectoryPeopleFeatureListProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebDirectoryPeopleFeatureList!</h1>
    </div>
  );
}

export default WebDirectoryPeopleFeatureList;
