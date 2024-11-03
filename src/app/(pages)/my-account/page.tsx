import Link from "next/link"

const MyAccountPage = () => {
    return (
        <div>
            <div>

                <img src="" alt="" />
            </div>

            <div>
                <p>
                    <span>


                        Hello <b>gonzaloaxelh</b> (not <b>gonzaloaxelh?</b>  Log out)
                    </span>
                </p>
                <p>
                    From your account dashboard you can view your <span>
                        <Link href="#"> recent orders </Link></span>, manage your shipping and billing addresses, and edit your password and account details.
                </p>
            </div>
        </div>


    )
}

export default MyAccountPage