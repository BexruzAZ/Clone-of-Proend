import Nav from "./components/Nav";
import Message from "./components/Message";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Performance from "./components/Performance";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Review from "./components/Review";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";

export default function App() {
    return (
        <>
            <Message />
            <Nav />
            <Home />
            <About />
            <Services />
            <Performance />
            <Technologies />
            <Portfolio />
            <Clients />
            <Review />
            <Form />
            <Footer />
            <Gradient/>
        </>
    );
}
