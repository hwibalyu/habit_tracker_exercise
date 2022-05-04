import React, { memo } from "react";

const AddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    formRef.current.reset();
    value && props.onAdd(value);
  };

  return (
    <div>
      <form ref={formRef} className="input" onSubmit={handleSubmit}>
        <input ref={inputRef} className="habitinput" placeholder="Add your habit" type="text" />
        <button className="pushbtn">push</button>
      </form>
    </div>
  );
});

export default AddForm;
