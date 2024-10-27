import Button from "@/app/main/components/Buttons";
import React from "react";
import ReactStars from "react-stars";


export default function FormAddReview() {
    const [raiting, setRaiting] = React.useState(0);

    const ratingChanged = (newRating: any) => {
        setRaiting(newRating);
    };

    return (
        <div className="px-8">
            <form onSubmit={(e) => e.preventDefault()}>
                <p className="text-lg font-medium">Add a review</p>
                <p className="text-sm font-medium mt-2">YOUR RATING</p>
                <div className="flex items-center">
                    <ReactStars value={raiting} onChange={ratingChanged} size={24} color2="#ffd700" />
                    <span className="ml-1 mt-1 text-sm font-medium">{`${raiting}/5`}</span>
                </div>
                <p className="text-sm font-medium mt-4">YOUR REVIEW</p>
                <textarea
                    rows={10}
                    className="w-full p-4 mt-2 bg-gray-50 rounded-lg resize-none outline-none text-gray-700 text-sm"
                ></textarea>
                <Button label="Enviar" type="default" submit={true} className="w-1/3 mt-4 sm:w-full" />
            </form>
        </div>
    );
}
