import Option from "./Option";

const Category = ({ name, title, options, func }) => {
  return (
    <div className={`category ${name}`}>
      <h2>{title}</h2>
      {options.map((option, index) => {
        return (
          <Option
            key={index}
            description={option.title}
            price={option.price}
            setCategoryPrice={func}
          />
        );
      })}
    </div>
  );
};

export default Category;
