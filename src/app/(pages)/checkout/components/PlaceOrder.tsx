import Button from "@/app/main/components/Buttons"

const PlaceOrder = () => {
    return (
        <div className="flex flex-col gap-4 px-8">
            <div className="flex gap-2 items-center mt-8">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-sm"> I have read and agree to the website terms and conditions *</label>
            </div>
            <div>


                <Button type="secondary" className="font-bold tracking-widest py-3">
                    PLACE ORDER
                </Button>

            </div>
        </div>
    )
}

export default PlaceOrder