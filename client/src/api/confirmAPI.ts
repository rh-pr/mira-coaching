
export const confirEmail = async () => {
    const baseUrl = import.meta.env.VITE_URL || 'http://localhost:3000/api';

    // Get query params from current window location
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const type = params.get('type');

    if (!token || !type) {
        console.error('Missing token or type');
        return false;
    }

    try {
        const response = await fetch(`${baseUrl}/confirm?token=${token}&type=${type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Confirmation request failed');
        }

        return response.json();
        
    } catch (err) {
        console.error('Error sending confirmation request: ', err);
        return false;
    }
};
