

import FoodCombos from './homecomponents/FoodCombos';
import FoodsCategorySimple from './homecomponents/FoodsCategorySimple';
import GrilledBurgers from './homecomponents/GrilledBurguers';
import HomeBannerSlider from './homecomponents/HomeBannerSlider';
import MoreGreatSides from './homecomponents/MoreGreatSides';
import NewestLatestOffersSubscribe from './homecomponents/NewestLatestOffersSubscribe';
import OnlineOrderPromo from './homecomponents/OnlineOrderPromo';
import ServiceOverview from './homecomponents/ServiceOverview';
import LayoutClient from './layout-client';
const Home = () => {
    return (
        <main>
            <LayoutClient>
                <HomeBannerSlider />
                <div className='mx-auto max-w-screen-xl'>
                    <FoodsCategorySimple />
                    <FoodCombos />
                    <GrilledBurgers />
                    <OnlineOrderPromo />
                    <MoreGreatSides />
                    <ServiceOverview />
                </div>
                <NewestLatestOffersSubscribe />
            </LayoutClient>

        </main>
    )
}

export default Home