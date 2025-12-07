"""
Flask backend for CNN Web App
Handles digit prediction from handwritten grid data
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# TODO: Load your trained CNN model here
# from your_model import load_model
# model = load_model('path_to_model')


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Backend is running'}), 200


@app.route('/api/predict', methods=['POST'])
def predict():
    """
    Predict digit from handwritten grid
    Expected JSON: {'image': [[...], [...], ...]}  (28x28 array)
    """
    try:
        data = request.get_json()
        
        if 'image' not in data:
            return jsonify({'error': 'Missing image data'}), 400
        
        # Convert to numpy array
        grid_data = np.array(data['image'], dtype=np.float32)
        
        # Validate shape
        if grid_data.shape != (28, 28):
            return jsonify({'error': f'Invalid image shape. Expected (28, 28), got {grid_data.shape}'}), 400
        
        # Normalize to 0-1
        grid_data = grid_data / 255.0
        
        # TODO: Pass through your model
        # prediction = model.predict(grid_data.reshape(1, 28, 28, 1))
        # predicted_digit = np.argmax(prediction)
        # confidence = float(np.max(prediction))
        
        # Placeholder response
        return jsonify({
            'prediction': 0,  # Replace with actual prediction
            'confidence': 0.95,  # Replace with actual confidence
            'message': 'Placeholder prediction'
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/model-info', methods=['GET'])
def model_info():
    """Get model metadata"""
    return jsonify({
        'model_name': 'CNN Digit Classifier',
        'input_shape': [28, 28],
        'output_classes': 10,
        'accuracy': 'TBD'
    }), 200


@app.route('/api/reset', methods=['POST'])
def reset_session():
    """Reset backend state (optional)"""
    return jsonify({'status': 'reset', 'message': 'Session reset'}), 200


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
