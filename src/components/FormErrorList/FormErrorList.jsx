// src/components/FormErrorList/FormErrorList.jsx
import "./FormErrorList.scss";

export default function FormErrorList({ errors }) {
  if (!errors || Object.keys(errors).length === 0) return null;

  return (
    <div className="form-error-list">
      {Object.values(errors).map((msg, i) => (
        <div key={i} className="error-item">
          {msg}
        </div>
      ))}
    </div>
  );
}
