
export function navigateTo(relativeURL: string) {
    const navURL = window.location.href.slice(0, - 1) + relativeURL
    return navURL
}