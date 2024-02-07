const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
      },
      actions: {
        syncTokenfromSessionStorage: () => {
          const token = sessionStorage.getItem("token");
          if (token && token !== undefined && token !== "")
            setStore({ token: token });
        }

    }
}
}
export default getState;