import Image from "next/image"

const ImageProduct = ({ urlImage = "", name = "" }) => {
    return (
        <div>
            <Image
                src={urlImage}
                alt={name}
                width={900}
                height={900}
                layout="intrinsic"
                objectFit="contain"
            />
        </div>
    )
}

export default ImageProduct