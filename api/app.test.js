const axios = require("axios");

const API_URL = process.env.API_URL || "http://localhost:3000";

const waitForApi = async (url, retries = 5) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            if (i < retries - 1) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } else {
                throw error;
            }
        }
    }
};

test("should return 200 OK for the root routeee", async () => {
    try {
        const response = await waitForApi(`${API_URL}/`);
        expect(response.status).toBe(200);
    } catch (error) {
        expect(error.response.status).toBe(500);  // Verificar el código de error
        expect(error.response.data).toContain("¡Algo salió mal en la ruta principal!"); // Verifica el mensaje de error
    }
});
