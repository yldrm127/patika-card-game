import { useDispatch } from "react-redux";
import { restart } from "../redux/cardSlice";
function Restart() {
  const restartDispatch = useDispatch();

  return (
    <button className="restart" onClick={() => restartDispatch(restart())}>
      Restart
    </button>
  );
}

export default Restart;
