import './App.module.scss';
import './index.module.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

function App() {
    return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
    );
}

export default App;
