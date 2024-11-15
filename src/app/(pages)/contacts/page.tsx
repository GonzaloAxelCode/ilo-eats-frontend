import NewestLatestOffersSubscribe from "../homecomponents/NewestLatestOffersSubscribe"
import LayoutClient from "../layout-client"
import ContactDeliveryHours from "./components/ContactDeliveryHours"
import MapLocationFullScreen from "./components/MapLocationFullScreen"
import SendMessageForm from "./components/SendMessageForm"

const ContactsPage = () => {
    return (
        <main>
            <LayoutClient>
                <MapLocationFullScreen />
                <div className="mx-auto max-w-screen-lg">
                    <div className="flex gap-5 py-12 my-12">
                        <SendMessageForm />
                        <ContactDeliveryHours />
                    </div>

                </div>
                <NewestLatestOffersSubscribe />
            </LayoutClient>
        </main>
    )
}

export default ContactsPage