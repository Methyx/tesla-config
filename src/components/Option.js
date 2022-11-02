const Option = ({ description, price, setCategoryPrice }) => {
  return (
    <button
      onClick={() => {
        setCategoryPrice(price);
      }}
    >{`${description} - ${price} €`}</button>
  );
};

export default Option;
