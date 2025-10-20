const RideCard = ({ name, entityType, onRemove }) => {
  function handleRemove() {
    if (onRemove) onRemove(name);
  }

  return (
    <div className="card bg-white text-gray-900 shadow-md w-96 border border-gray-200">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Type: {entityType}</p>
        {onRemove && (
          <button className="btn btn-error mt-4" onClick={handleRemove}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default RideCard;
