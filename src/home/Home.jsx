import Navbar from '../components/navbar/Navbar'
import Featured from '../featured/Featured'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type="series" />
        </div>
    )
}

export default Home