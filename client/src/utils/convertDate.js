export const convertDateToLocal = (initDate) => {
    if (!initDate) return '';
    const date = new Date(initDate);

    const browserLanguage = navigator.language;
    const localDateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    return date.toLocaleString(browserLanguage, localDateOptions);
}