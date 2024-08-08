import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-green-200 py-4 font-karla md:py-0">
            <Form />
            <ToastContainer
                position="top-center"
                hideProgressBar={true}
                closeButton={false}
                newestOnTop={true}
                className={"m-4 w-fit overflow-hidden rounded-lg md:m-0 md:rounded-2xl"}
            />
        </div>
    );
}

export default App;
