const RideCard = ({ name, entityType, imageUrl, onAdd, onRemove }) => {
  return (
    <div
      className="card overflow-hidden rounded-2xl text-gray-900 border border-gray-200
                 w-80 shadow-md mx-auto
                 bg-gradient-to-br from-[#fdf3ff] via-[#e6f6ff] to-[#fff8e5]"
    >
      {/* Fixed image sizes so they're all the same */}
      <figure className="ww-full overflow-hidden rounded-t-xl" style={{ height: "180px" }}>
        <img
          src={imageUrl || "/rides/_placeholder.jpg"}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Type: {entityType}</p>

        {onAdd && (
          <button
            className="btn btn-primary mt-2 rounded-full px-6 shadow-md
                       hover:shadow-lg hover:brightness-110 transition-all duration-300"
            onClick={onAdd}
          >
             Add to Trip 
          </button>
        )}

        {onRemove && (
          <button
            className="btn btn-error mt-2 rounded-full px-8 shadow-md
                       hover:shadow-lg hover:brightness-110 transition-all duration-300"
            onClick={() => onRemove(name)}
          >
             Remove 
          </button>
        )}
      </div>
    </div>
  );
};

export default RideCard;