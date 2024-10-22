import ItemRibbon from "./ItemRibbon";
import LogoCenter from "./LogoCenter";


const links = {
    linksListHome: [
        {
            link: "/fastfood",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
        {
            link: "/contact",
            name: "Contact",
        },
    ],
    linksListBlog: [
        {
            link: "/fastfood",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
    ],
    linksListAbout: [
        {
            link: "/fastfood",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
        {
            link: "/fastfood",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
        {
            link: "/fastfood",
            name: "Home",
        },
        {
            link: "/about",
            name: "About",
        },
    ],
};


const RibbonBlack = () => {
    return (
        <div className="mt-4 bg-blackribbon flex justify-center h-[60px]" >
            <div className="w-screen flex justify-between  max-w-screen-xl">

                <div className="flex pl-12">
                    <ItemRibbon links={links.linksListHome} >
                        Inicio
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Hot
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Sobre IloEats
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Promociones
                    </ItemRibbon>
                </div>
                <LogoCenter />
                <div className="flex pr-12">
                    <ItemRibbon links={links.linksListHome} >
                        Mis ordenes
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Nosotros
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Ubicaciones
                    </ItemRibbon>
                    <ItemRibbon links={links.linksListHome} >
                        Contacto
                    </ItemRibbon>
                </div>
            </div>
        </div>
    )
}

export default RibbonBlack