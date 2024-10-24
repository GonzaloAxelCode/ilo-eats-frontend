export const getNumberPrice = (price: any) => String(price).split(".")[0];
export const getDecimalPrice = (price: any) => String(price).split(".")[1];
export const nameFormat = (name: any) => {
    const nameProductFormat = String(name)
        .split(" ")
        .map((el) => el.toLowerCase())
        .join("-");

    return nameProductFormat;
};
