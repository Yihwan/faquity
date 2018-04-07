// from http://jsfiddle.net/hAfMM/

export const currencyFormatter = (n, currency="$") => {
    return currency + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};
