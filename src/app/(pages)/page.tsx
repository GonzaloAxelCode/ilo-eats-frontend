import FloatNavigationCategories from './homecomponents/FloatNavigationCategories';
import FoodCombos from './homecomponents/FoodCombos';
import FoodsCategorySimple from './homecomponents/FoodsCategorySimple';
import GrilledBurgers from './homecomponents/GrilledBurguers';
import HeaderRibbon from './homecomponents/HeaderRibbon';
import HomeBannerSlider from './homecomponents/HomeBannerSlider';
import MoreGreatSides from './homecomponents/MoreGreatSides';
import NewestLatestOffersSubscribe from './homecomponents/NewestLatestOffersSubscribe';
import OnlineOrderPromo from './homecomponents/OnlineOrderPromo';
import ServiceOverview from './homecomponents/ServiceOverview';
const Home = () => {
    return (
        <main>
            <HeaderRibbon />
            <FloatNavigationCategories />
            <HomeBannerSlider />
            <FoodsCategorySimple />
            <FoodCombos />
            <GrilledBurgers />
            <OnlineOrderPromo />
            <MoreGreatSides />
            <ServiceOverview />
            <NewestLatestOffersSubscribe />
        </main>

    )
}

export default Home