import Navigation from "./components/navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import ContactForm from "./components/contactForm/ContactForm";
import SeatSelection from "./components/seatSelection/SeatSelection";

function App()
{
  return(
    <>
    <Navigation/>
    <Header/>
    <main className="main_container">
    <SeatSelection/>
     </main>
    <ContactForm/>
    </>
  )
}
export default App;