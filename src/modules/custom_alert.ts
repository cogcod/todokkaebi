import { makeVar } from '@apollo/client';

const custom_alert = makeVar({
  isOpen: false,
  title: '',
  content: '',
  categoryId: '',
  projectId: '',
});

export default custom_alert;
