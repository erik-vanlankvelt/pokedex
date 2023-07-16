export const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

// Assumes words are divided with a space
export const capitalizeAllWords = (text: string) => {
    const capsList: string[] = text.split(' ').map((word: string) => capitalizeFirstLetter(word));

    return capsList.join(' ');
};

export const humanizeText = (text: string) => {
    // TODO implement more robust regex
    return text.replace('-', ' ');
};
