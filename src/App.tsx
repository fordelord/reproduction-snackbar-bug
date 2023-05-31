import { useSnackbar } from "notistack";
import "./styles.css";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => enqueueSnackbar("Success", { variant: "success" })}
      >
        Succes button
      </button>
      <button
        className="button"
        onClick={() => enqueueSnackbar("Error", { variant: "error" })}
      >
        Error button
      </button>
    </div>
  );
}

export default App;
