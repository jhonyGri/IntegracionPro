const axios = require('axios');

// Simula axios
jest.mock('axios');

describe('API Integration', () => {
    it('should make an API request successfully', async () => {
        // Simula una respuesta exitosa de la API
        axios.get.mockResolvedValue({ data: 'Hola desde la API!' });

        // Realiza una solicitud usando axios
        const response = await axios.get('http://api:30000');

        // Verifica que la solicitud fue exitosa
        expect(response.data).toBe('Hola desde la API!');
    });

    it('should handle API errors correctly', async () => {
        // Simula un error de la API
        axios.get.mockRejectedValue(new Error('API Error'));

        try {
            // Realiza una solicitud que fallará
            await axios.get('http://api:30000');
        } catch (error) {
            // Verifica que se lanzó un error
            expect(error.message).toBe('API Error');
        }
    });
});
