import Checkbox from "@/app/main/components/ChecksAndRadios/CheckboxOption";
import { useState } from "react";

const ProductFromCombo = ({ product }: any) => {
    const [selectedExtras, setSelectedExtras] = useState(new Set());
    const [quantity, setQuantity] = useState<number>(1)

    const toggleExtra = (extra: any) => {
        const newExtras = new Set(selectedExtras);
        if (newExtras.has(extra)) {
            newExtras.delete(extra);
        } else {
            newExtras.add(extra);
        }
        setSelectedExtras(newExtras);
    };

    const calculateTotalPrice = () => {
        let total = product.original_price;
        selectedExtras.forEach((extra) => {
            const extraItem = product.extras.find((e: any) => e.name === extra);
            if (extraItem) {
                total += extraItem.price;
            }
        });
        return total.toFixed(2);
    };

    return (
        <div className="flex flex-col">
            <p>{product.description}</p>
            <div>
                <span>{product.original_price}</span>
            </div>
            <div>
                <h3>Extras:</h3>
                {product.extras.map((extra: any) => (
                    <Checkbox
                        key={extra.name}
                        label={`${extra.name} (+$${extra.price})`}
                        checked={selectedExtras.has(extra.name)}
                        onChange={() => toggleExtra(extra.name)}
                    />
                ))}
            </div>
            <h3>Total Price: ${calculateTotalPrice()}</h3>
            <div className="flex">
                <div>
                    <span onClick={() => setQuantity((prev: number) => prev + 1)}>+</span>
                    <span>{quantity}</span>
                    <span onClick={() => setQuantity((prev: number) => Math.max(prev - 1, 0))}>-</span>
                </div>
            </div>

        </div>
    )
}

export default ProductFromCombo