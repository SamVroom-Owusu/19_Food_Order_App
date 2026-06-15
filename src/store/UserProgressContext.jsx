import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgess, setUserProgess] = useState("");

  function showCart() {
    setUserProgess("cart");
  }

  function hideCart() {
    setUserProgess("");
  }

  function showCheckout() {
    setUserProgess("checkout");
  }

  function hideCheckout() {
    setUserProgess("");
  }

  const userProgressCtx = {
    progress: userProgess,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
