import { Visibility } from '@mui/icons-material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './WidgetSm.css'

const WidgetSm = () => {

    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDgxNzQ5ZTZkNWZiZmQyMTdkYmU1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTMxNjY3MCwiZXhwIjoxNjc1NzQ4NjcwfQ.bjZ0TNFK_ItFOm8KlVbVCGNz8vyPAm5Cx3GD-faIaXQ" },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                {newUsers.map(user => (
                    <li className="widgetSmListItem">
                        <img src={user.profilePic || "https://th.bing.com/th/id/OIP.4l745LKOzMIKiNgqGO6cLQHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm