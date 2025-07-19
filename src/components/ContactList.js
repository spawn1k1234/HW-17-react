// import ContactItem from "./ContactItem";

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// }
import { useContacts } from "../context/ContactContext";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const { filteredContacts, deleteContact } = useContacts();

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
}
