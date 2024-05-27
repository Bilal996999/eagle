import { RouterProvider } from "react-router-dom"
import { publicRoutes } from "./routes/router"
import Aos from "aos"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromiss = loadStripe('pk_test_51Os6N8EVLfj7i40oIqQMz3f5c0k5N7d8jUpjvsJKUITgW59K5l04LMZyOxHFx0LxLhRwelcqv7ueK3A8fV3Zurb700YhpSxcXJ');


function App() {
  Aos.init()
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <Elements stripe={stripePromiss}>
        <RouterProvider router={publicRoutes} />
      </Elements>
    </>
  )
}

export default App
