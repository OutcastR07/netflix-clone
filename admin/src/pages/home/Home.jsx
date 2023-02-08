import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
// import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import { useMemo, useState, useEffect } from 'react'
import axios from "axios"

const Home = () => {

    const MONTHS = useMemo(() =>
        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], []
    );

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", {
                    headers: { token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken, },
                });
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                });
                statsList.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "New User": item.total },
                    ])
                );
            } catch (err) {
                console.log(err)
            }
        };
        getStats();
    }, [MONTHS])

    return (
        <div className='home'>
            <FeaturedInfo />
            <Charts data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className="homeWidgets">
                {/* <WidgetSm /> */}
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home