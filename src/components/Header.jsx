import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ headerText }) => {
  return (
    <header className="header">
      <h1>{headerText}</h1>
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
