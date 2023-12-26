import PropTypes from "prop-types";

const Button = ({ name, primary = true }) => {
  return (
    <button
      className={
        (primary
          ? "flex items-center justify-center rounded-xl bg-[#6dcef8] px-6 py-2 font-semibold italic text-white"
          : "secondary") +
        " transition-transform duration-150 hover:scale-105 hover:opacity-90 active:scale-100"
      }
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

export default Button;
