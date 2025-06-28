export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="lilists">
      {contact.name}: {contact.number}
      <button className="bitdeleit" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
}
