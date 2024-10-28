import { useState } from "react";
import ProductFromCombo from "./ProductFromCombo";

const GroupCombo = ({ combo_list }: any) => {
    const products: any = combo_list?.products || [];

    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    const toggleSelectedProduct = (productId: string) => {
        setSelectedProductId(prevSelectedProductId =>
            prevSelectedProductId === productId ? null : productId
        );
    };

    return (
        <div className="flex flex-col">
            <div>
                <img src={combo_list?.image} alt="" />
            </div>
            <div>
                <h2>{combo_list?.title}</h2>
                <p>{combo_list?.description}</p>
            </div>
            <div className="flex flex-col">
                <p>{combo_list?.category}</p>
                <div className="flex flex-row gap-4">
                    {products.map((product: any) => (
                        <span
                            className="cursor-pointer"
                            key={product.idProduct} // Usar el id único del producto como key
                            onClick={() => toggleSelectedProduct(product.idProduct)}
                        >
                            <div
                                style={{
                                    borderBottomWidth: 3,
                                    borderStyle: "solid",
                                    borderColor:
                                        selectedProductId === product.idProduct
                                            ? "black" // Borde negro para el producto seleccionado
                                            : "transparent", // Borde transparente para los no seleccionados
                                    padding: "5px", // Padding para el contenedor
                                    marginBottom: "10px" // Separación entre productos
                                }}
                            >
                                <img
                                    src={`/images/Food/${product.imageLocal}`}
                                    className="w-[50px] h-[50px]"
                                    alt={product.description} // Mejorar accesibilidad
                                />
                            </div>
                        </span>
                    ))}
                </div>
                <div>
                    {selectedProductId && (
                        <ProductFromCombo
                            product={products.find((product: any) => product.idProduct === selectedProductId)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default GroupCombo;
