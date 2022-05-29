import styles from './react-ui-forms.module.scss';

/* eslint-disable-next-line */
export interface ReactUiFormsProps {}

export function ReactUiForms(props: ReactUiFormsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUiForms!</h1>
    </div>
  );
}

export default ReactUiForms;
