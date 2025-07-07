export function capitalizeString(str: string, lower = false) {
    return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
}
export function getLastRoutePart(route: string) {
    route = route.replace(/^\/|\/$/g, '');
    const parts = route.split('/');
    return parts[parts.length - 1].replace(/-/g, ' ');
}

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}