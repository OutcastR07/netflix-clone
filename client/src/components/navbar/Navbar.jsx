import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""
                    />
                    <Link to="/" className='link'>
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src="https://th.bing.com/th/id/R.a3bc6624ec084486bf9b0b2901e0cd71?rik=v8yuR%2fHyTWiWOw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fpT5%2fXqo%2fpT5XqoLGc.jpg&ehk=M5kwcO%2brst9SWK%2fCeQvSWhQ3LaPcgktykyN85dFDVgU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar