import CartICon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button>
      <span>
        <CartICon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
