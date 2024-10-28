import ContentTitleHolder from "../../main/components/ContentTitleHolder"
import LayoutClient from "../layout-client"

const CartPage = () => {
    return (
        <main>
            <LayoutClient>
                <ContentTitleHolder />
                <div className='mx-auto max-w-screen-xl'>
                    {/** ItemsCart **/}
                    {/** DeliveryLocation **/}
                    {/** CartTotalsPrices **/}
                    {/** ItemsCart **/}
                    {/** ItemsCart **/}
                    {/** ItemsCart **/}
                </div>
            </LayoutClient>
        </main>
    )
}

export default CartPage