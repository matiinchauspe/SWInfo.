import PropTypes from "prop-types";
import { createContext, useContext } from "react";

export function createSafeContext(initial = null, errorMessage) {
  const Context = createContext(initial);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) {
      throw new Error(errorMessage);
    }

    return ctx;
  };

  const Provider = ({ children, value }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.any.isRequired,
  };

  return [Provider, useSafeContext];
}
