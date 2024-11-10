import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList'
import { store } from '../redux/store';
import { fetchContacts } from '../redux/tasks/contactSlice';

// import { selectIsLoading } from '../redux/tasks/selectors';

export default function Tasks() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Your tasks</title>
      </Helmet> */}
      <ContactForm />
      {/* {<div>{isLoading && 'Request in progress...'}</div>} */}
      <Filter />
      <ContactList />
    </>
  );
}