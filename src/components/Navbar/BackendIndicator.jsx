import { useBackends } from "../../context/BackendsContext";

const BackendIndicator = ({ onClick }) => {
  const { activeBackend } = useBackends();

  if (!activeBackend) return null;

  return (
    <div
      className="backend-circle ms-2"
      title={`Backend: ${activeBackend.alias}`}
      onClick={onClick}
    >
      {activeBackend.alias.slice(0, 2).toUpperCase()}
    </div>
  );
};

export default BackendIndicator;
