import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Lecture 91: hooks to check if user is logged in
//rafc
export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //return user object
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  });

  return { loggedIn, checkingStatus };
};
