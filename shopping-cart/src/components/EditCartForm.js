import '../assets/css/contact.css';

const EditCartForm = ({ item, handleAdd, handleRemove }) => {
  const handleMinus = () => {
    if (item.quantity > 1) {
      handleAdd(item.id, item.quantity - 1);
    } else {
      handleRemove(item.id);
    }
  };

  const handlePlus = () => {
    if (item.quantity < 9) {
      handleAdd(item.id, item.quantity + 1);
    }
  };

  const fieldContainerStyle = {
    fontSize: '18px',
    display: 'grid',
    gridTemplateColumns: '0.3fr 0.4fr 0.3fr',
    textAlign: 'center',
    width: '120px',
    border: '1px solid #111',
  };

  const btnStyle = {
    fontSize: '24px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <div>
      <div style={fieldContainerStyle}>
        <button type="button" onClick={handleMinus} style={btnStyle}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={handlePlus} style={btnStyle}>
          +
        </button>
      </div>
    </div>
  );
};

export default EditCartForm;
