const TodoForm = ({ handleSubmit, todoText, handleChangeTodoText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoText} onChange={handleChangeTodoText} />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TodoForm;
