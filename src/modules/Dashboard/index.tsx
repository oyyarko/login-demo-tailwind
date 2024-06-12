import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { useDispatch } from "react-redux";
import { setActiveUser, setLoggedIn } from "../Signin/features/loginSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { activeUser } = useSelector((state: RootState) => state.login);

  return (
    <div className="bg-white p-10 shadow-lg rounded-3xl min-w-sm flex flex-col ">
      <div className="gap-4 flex flex-col">
        <h2 className="text-5xl font-medium">
          {" "}
          Welcome,{" "}
          <span className="text-primary font-bold">
            {" "}
            {activeUser.username || "user"}
          </span>
        </h2>
        <p>Hope you are having a good time, If not then scroll lil bit?</p>

        <Button
          className="mt-5"
          onClick={() => {
            dispatch(setActiveUser({}));
            dispatch(setLoggedIn(false));
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
