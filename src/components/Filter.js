export default function Filter({ value, onChange }) {
  return (
    <label>
      <input
        placeholder="Find contacts by name:"
        type="text"
        className="inputform"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
