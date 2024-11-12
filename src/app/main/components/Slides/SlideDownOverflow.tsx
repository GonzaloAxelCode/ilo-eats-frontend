"use client"

import { createPortal } from 'react-dom';


const SlideDownOverflow = ({ isOpen, children, }: any) => {

    return (
        <div>
            {createPortal(<div >
                <div
                    className={`fixed h-screen top-[4.8rem] w-full bg-white overflow-hidden z-20 transform transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? "max-h-screen" : "max-h-0"
                        }`}
                >
                    <div className='pt-20 '>

                        {children}
                    </div>

                </div>
            </div>, document.body, "cart-down-slider-fullscreen")}
        </div>
    )
}

export default SlideDownOverflow