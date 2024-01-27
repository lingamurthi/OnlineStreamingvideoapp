import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";

const useWatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(openMenu());
    };
  }, []);
};
export default useWatchPage;
