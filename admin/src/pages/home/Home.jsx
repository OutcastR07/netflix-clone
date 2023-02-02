import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home