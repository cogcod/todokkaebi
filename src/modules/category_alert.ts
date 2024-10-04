import { makeVar } from '@apollo/client';

const category_alert = makeVar({
  isOpen: false,
  title: '',
  content: '',
  categoryId: '',
});

export default category_alert;
