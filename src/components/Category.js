import Option from "./Option";
import { useState } from "react";

const Category = ({ name, title, options, categoryPrice }) => {
  const [selected, setSelected] = useState(-1);
  return (
    <div className={`category ${name}`}>
      <h2>{title}</h2>
      {options.map((option, index) => {
        return (
          <Option
            key={index}
            description={option.title}
            price={option.price}
            setCategoryPrice={categoryPrice}
            selected={selected}
            setSelected={setSelected}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Category;
