export const useCropTitle = () => (text: string) => `${text.slice(0, 25)}${text.length > 25 ? '...' : ''}`;
