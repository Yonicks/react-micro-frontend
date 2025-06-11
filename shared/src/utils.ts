// Example utility functions

export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatEmail(email: string): string {
    const [user, domain] = email.split('@');
    return `${user[0]}***@${domain}`;
}
