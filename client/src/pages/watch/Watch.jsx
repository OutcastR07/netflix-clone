import './Watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import video from './ksimon.mp4'

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackIcon />
                Home
            </div>
            <video
                className='video'
                autoPlay
                progress
                controls
                src={video}
            />
        </div>
    )
}

export default Watch