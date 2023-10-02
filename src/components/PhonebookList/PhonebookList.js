import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';


import { List, ListItem, Text, Button } from './PhonebookList.styled';


export const PhonebookList = () => {

    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    const onDelete = (contactId) => {
        dispatch(deleteContact(contactId));
    }


    return contacts.length > 0 ? (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Text>{`${name}: ${number}`}</Text>
                    <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    ) :
        (
            <Text>
                No contacts
            </Text>
        );
}