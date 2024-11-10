
const PaymentOptions = () => {
    return (
        <div className="flex flex-col px-8 gap-5">
            <div className="flex flex-col gap-3">
                <span className="flex items-center">


                    <input type="radio" name="cash_radio" id="1" />
                    <label htmlFor="" className="text-[#333333] text-xs font-medium ml-2">CASH ON DELIVERY</label>

                </span>
                <p className="text-sm font-normal text-gray-500">Pay with cash upon delivery.</p>
            </div>
            <div className="flex">
                <input type="radio" name="credit_card" id="2" />
                <label htmlFor="" className="text-[#333333] text-xs font-medium ml-2">CREDIT CARD (STRIPE)</label>
            </div>
            <div>
                <p className="font-normal text-sm">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            </div>
        </div>
    )
}

export default PaymentOptions