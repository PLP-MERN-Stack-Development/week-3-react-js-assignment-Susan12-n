const Card = ({ task, onDelete, onEdit }) => {
  if (!task) return null; 

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{task.text}</h2>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

      <button
        onClick={() => onEdit(task.id)}
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        Edit
      </button>
    </div>
  );
};

export default Card;
