import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("data");
    if (token) {
      setUser(token);
      setUserdata(data);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userdata, setUserdata }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
