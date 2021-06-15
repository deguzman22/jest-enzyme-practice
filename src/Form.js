import React, { useEffect, useState } from "react";

function Form() {
  const [comment, setComment] = useState("");

  
  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // saveComment(comment);
    setComment("");
  }

  return(
    <React.Fragment>
      {console.log(comment)}
      <form>
        <input 
          type="input" 
          value={comment}
          onChange={handleChange}
        />
        <input
          id="submit" 
          type="submit" 
          onSubmit={handleSubmit} 
        />
      </form>
    </React.Fragment>
  );
}

export default Form;