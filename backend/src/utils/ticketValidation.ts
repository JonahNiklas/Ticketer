export function validatePrice(price : Number) {
    if(price == null || price > Number.MAX_SAFE_INTEGER) return false;
}

export function validateName(name : string) {
    if(name == null || name.length > 100) return false;
}