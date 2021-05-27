import { useLocation } from 'react-router-dom';

export const useSearch = () => {
    const location = useLocation();

    const { search } = location;

    const nextSearch = search.replace('?', '');
    const searchEntries = nextSearch.split('&').map(item => {
        const [key, value] = item.split('=');
        if (value === `${parseFloat(value)}`) {
            return [key, parseFloat(value)];
        }
        return [key, value];
    });

    return Object.fromEntries(searchEntries);
};
