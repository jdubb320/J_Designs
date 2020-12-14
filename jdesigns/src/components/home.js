import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './home.css'
import JDesignsNavbar from './jDesignsNavbar'

function Home(){
    return(
        <div className="home">
            <header>
                <JDesignsNavbar/>
            </header>
                <h1>Need a beautiful website?</h1>
                <h2>Go no further....</h2>
                <div className="flex-container">
                    <Button>Schedule Consultation</Button>
                </div>
        </div>
    );
}

export default Home;