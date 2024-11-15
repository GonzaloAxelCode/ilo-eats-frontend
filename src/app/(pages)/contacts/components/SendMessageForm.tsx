import Button from "@/app/main/components/Buttons"

const SendMessageForm = () => {
    return (
        <div className="p-2">
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <p className="text-[#888888] text-md font-normal mt-4">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis.</p>
            <form className="pt-12">
                <div className="flex flex-col mb-5">
                    <label className="font-semibold text-[#333333] mb-1 text-xs uppercase">Your name:</label>
                    <input type="text" className="outline-none" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="font-semibold text-[#333333] mb-1 text-xs uppercase">E-mal address</label>
                    <input type="text" className="outline-none" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="font-semibold text-[#333333] mb-1 text-xs uppercase">Phone:</label>
                    <input type="text" className="outline-none" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="font-semibold text-[#333333] mb-1 text-xs uppercase">Subject:</label>
                    <input type="text" className="outline-none" />
                </div>
                <div className="flex flex-col mb-5">
                    <label className="font-semibold text-[#333333] mb-1 text-xs uppercase">Your name:</label>
                    <textarea name="" className="outline-none" id=""></textarea>

                </div>

                <Button className="mt-12">
                    SEND A MESSAGE
                </Button>

            </form>
        </div>
    )
}

export default SendMessageForm