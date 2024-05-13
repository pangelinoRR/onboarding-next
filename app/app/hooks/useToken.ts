import { useState } from "react";

/**
 * Hook that returns the token in the current state
 * and also a function to set a new token to the state
 * and the localStorage.
 */
export default function useToken() {
  /**
   * Retrieves the token from the localStorage.
   */
  const getToken = () => {
    // TODO
  };

  /**
   * Token saved in state.
   */
  const [token, setToken] = useState(getToken());

  return {
    token,
  };
}
