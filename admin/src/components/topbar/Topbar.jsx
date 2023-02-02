import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Language, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">S-Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://th.bing.com/th/id/R.c8e5fa6abdb8cad98a95a52aed87e550?rik=PD%2bq5EuYOALmCQ&pid=ImgRaw&r=0" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar