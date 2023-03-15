export const date = (date) => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    let formatted = `${mo} ${da}, ${ye}`;
    return formatted;
};

const ranges = [
    {
        divider: 1e3,
        suffix: "K",
    },
    {
        divider: 1e6,
        suffix: "M",
    },
    {
        divider: 1e9,
        suffix: "B",
    },
];

export const formatNumber = (input) => {
    for (let index = ranges.length - 1; index >= 0; index--) {
        if (input > ranges[index].divider) {
            let quotient = input / ranges[index].divider;

            if (quotient < 10) {
                quotient = Math.floor(quotient * 10) / 10;
            } else {
                quotient = Math.floor(quotient);
            }

            return quotient.toString() + ranges[index].suffix;
        }
    }

    return input.toString();
};
