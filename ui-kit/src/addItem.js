export default function AddItem({
  handleFormSubmit,
  onNameChange,
  onDescChange,
  name,
  desc
}) {
  const canSubmit = !!name && !!desc;

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          value={desc}
          placeholder="Описание товара"
          className="ui-textfield"
          onChange={onDescChange}
        />
      </div>
      <div className="form-footer">
        <div className="validation"></div>
        <input
          disabled={!canSubmit}
          type="submit"
          className="ui-button"
          value="Добавить"
        />
      </div>
    </form>
  );
}
