import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";


import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';


export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <PhonebookList />
      </Layout>
    </>
  );

}