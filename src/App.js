import { Header , Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import 'react-toastify/dist/ReactToastify.css';
function App(){
  return (
    <div>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  )
}
export default App ;


