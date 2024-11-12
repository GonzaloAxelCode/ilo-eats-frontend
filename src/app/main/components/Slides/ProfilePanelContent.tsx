import PanelSelectorUser from "@/app/(pages)/my-account/components/PanelSelectorUser"
import LoginSection from "../Login/LoginSection"

const ProfilePanelContent = () => {
    const isLogged = false
    return (
        <div className="pt-12 mx-auto max-w-screen-sm">
            {isLogged ? <LoginSection /> : <PanelSelectorUser />}
        </div>
    )
}

export default ProfilePanelContent