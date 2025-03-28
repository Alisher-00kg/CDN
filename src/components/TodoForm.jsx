export const TodoForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your todo..." />
        <button type="submit">add-todo</button>
      </form>
    </div>
  );
};
