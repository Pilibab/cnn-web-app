/**
 * API Module for CNN Web App
 * Handles communication with backend services
 */

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Predict handwritten digit from grid
 * @param {number[][]} gridData - 28x28 array of pixel values (0-255)
 * @returns {Promise} Response with prediction and confidence
 */
export const predictDigit = async (gridData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/predict`, {
        
            // send to the backend 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: gridData }),
            });

        console.log(gridData.length);
        
        if (!response.ok) {
        throw new Error(`Prediction failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error predicting digit:', error);
        throw error;
    }
};

/**
 * Get model information and metadata
 * @returns {Promise} Response with model details
 */
export const getModelInfo = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/model-info`);

        if (!response.ok) {
        throw new Error(`Failed to fetch model info: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching model info:', error);
        throw error;
    }
};

/**
 * Health check endpoint
 * @returns {Promise} Response indicating backend status
 */
export const healthCheck = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        return response.ok;
    } catch (error) {
        console.error('Backend health check failed:', error);
        return false;
    }
};

/**
 * Optional: Clear session/reset backend state
 * @returns {Promise} Response confirming reset
 */
export const resetSession = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/reset`, {
        method: 'POST',
        });

        if (!response.ok) {
        throw new Error(`Reset failed: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error resetting session:', error);
        throw error;
    }
};
