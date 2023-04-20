import { Container } from "@mui/system"
import HeroSection from '../components/HeroSection'
import Banner from '../components/Banner'
import Testimg from './test.png'
import FlashSaleComponent from "../components/FlashSaleComponent"
import ExploreProducts from "../components/ExploreProducts"
import BestSellingProduct from "../components/BestSellingProducts"
import { Box } from "@mui/system"
import BrowseByCategory from "../components/BrowseByCategory"
import Feature from "../components/Feature"
const HomePage = props => {
    return <Container maxWidth={'xl'}  >

        <Box display={'flex'} flexDirection={'column'} gap={'4em'} sx={{margin :'2em'}}>
            <HeroSection />
            <FlashSaleComponent />
            <BrowseByCategory />
            <BestSellingProduct />
            <Banner title="Enhance Your Music Experience" img={Testimg} />
            <Feature />
            <ExploreProducts />
     


        </Box>



    </Container>
}

export default HomePage