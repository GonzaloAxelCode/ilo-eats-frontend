import PanelSelectorUser from "@/app/(pages)/my-account/components/PanelSelectorUser"
import LoginSection from "../Login/LoginSection"

const ProfilePanelContent = () => {
    const isLogged = false
    return (
        <div>
            {isLogged ? <LoginSection /> : <PanelSelectorUser />}
        </div>
    )
}

export default ProfilePanelContent