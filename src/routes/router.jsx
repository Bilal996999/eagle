import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Views/Home";
import Services from "../Views/Services";
import { CarSale } from "../Views/CarSale";
import { ContactUs } from "../Views/ContactUs";
import { ReserveBooking } from "../Views/ReserveBooking";
import { ReserveDetail } from "../Views/ReserveDetail";
import { PersonalDetail } from "../Views/PersonalDetail";
import { PaymentSuccess } from "../Views/PaymentSuccess";

export const publicRoutes = createBrowserRouter([
    {path:"/", element: <Home/>},
    {path:"/services", element: <Services/>},
    {path: "/car-sale", element: <CarSale/>},
    {path: "/contact-us", element: <ContactUs/>},
    {path: "/reserve", element: <ReserveBooking />},
    {path: "/reserve-detail", element: <ReserveDetail />},
    {path: "/user-detail", element: <PersonalDetail />},
    {path: "/payment-successful", element: <PaymentSuccess /> }
])