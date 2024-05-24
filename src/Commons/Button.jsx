import PropTypes from 'prop-types';

const Button = ({children}) => {
  return (
    <button className="bg-[#FF3946] relative z-40 text-sm py-3 font-bold px-6 text-white rounded-full hover:bg-[#be1226] duration-200">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
