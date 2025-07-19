// export default function Filter({ value, onChange }) {
//   return (
//     <label>
//       <input
//         placeholder="Find contacts by name:"
//         type="text"
//         className="inputform"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </label>
//   );
// }
import { useContacts } from "../context/ContactContext";

export default function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <label>
      <input
        placeholder="Find contacts by name:"
        type="text"
        className="inputform"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
}
