
const PricesTotals = () => {
    return (
        <div className="flex flex-col gap-3">


            <div className="flex items-center justify-between pl-8 pr-4 py-4 ">
                <div className="flex items-start space-x-4">
                    <b>Subtotal</b>
                </div>
                <div>
                    <bdi>
                        <span>$</span>
                        33
                        <sup>.20</sup>
                    </bdi>
                </div>

            </div>
            <div className="flex items-center justify-between pl-8 pr-4 py-4 ">
                <div className="flex items-start space-x-4">
                    <b>Total</b>
                </div>
                <div>
                    <bdi className="font-bold text-xl">
                        <span>$</span>
                        33
                        <sup>.20</sup>
                    </bdi>
                </div>

            </div>

        </div>
    )
}

export default PricesTotals