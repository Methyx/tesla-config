const Option = ({
  description,
  price,
  setCategoryPrice,
  selected,
  setSelected,
  index,
}) => {
  console.log(index);
  return (
    <button
      className={selected === index ? "selected" : ""}
      onClick={() => {
        setCategoryPrice(price);
        setSelected(index);
      }}
    >{`${description} - ${price} €`}</button>
  );
};

export default Option;
