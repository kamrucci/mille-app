import { Button } from '@kamrucci/components';

const Components: React.FC = (props) => {
  return (
    <>
      <p>button start</p>
      <Button data-testid="buttonnnn" text='component' />
      <p>button end</p>
    </>
  );
}

export default Components;
