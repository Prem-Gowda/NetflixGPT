import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, password } = user.uid;
      dispatch(addUser({ uid: uid, email: email, password: password }));
    } else {
      dispatch(removeUser());
    }
  });

  return <RouterProvider router={appRouter} />;
};

export default Body;
