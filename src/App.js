import Navigation from "./components/navigation/Navigation";
import "./App.css";
import ContactHeader from "./components/Header/ContactHeader";
import ContactForm from "./components/contactForm/ContactForm";
import SeatSelection from "./components/seatSelection/SeatSelection";

function App()
{
  return(
    <>
    <Navigation/>
    <ContactHeader/>
    <main className="main_container">
    <SeatSelection/>
    <ContactForm/>
     </main>
    </>
  )
}
export default App;