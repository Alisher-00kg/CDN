import React, { useState } from "react";

export const InputDate = () => {
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTime = {
      id: Date.now().toString(),
      chislo: new Intl.DateTimeFormat("ru-RU").format(new Date(date)),
    };
    console.log(newTime);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
};
