# Import flask and other necessary libraries
from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

# Initialize the Flask application
app = Flask(__name__)

# Load the pre-trained model and scaler
with open('model/crop_model_complete.pkl', 'rb') as file:
    model_package = pickle.load(file)

# Extract model components
model = model_package['model']
scaler = model_package['scaler']
crop_dict_reverse = model_package['crop_dict_reverse']

# Define home route
@app.route('/')
def home():
    return render_template('index.html')

# Define prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json
        
        # Prepare feature array
        features = np.array([[
            float(data['N']),
            float(data['P']),
            float(data['K']),
            float(data['temperature']),
            float(data['humidity']),
            float(data['ph']),
            float(data['rainfall'])
        ]])
        
        # Scale features and make prediction
        scaled_features = scaler.transform(features)
        probabilities = model.predict_proba(scaled_features)[0]
        top_indices = np.argsort(probabilities)[::-1][:6]
        
        # Prepare recommendations
        recommendations = []
        # Get top 6 crop recommendations
        for idx in top_indices:
            crop_num = model.classes_[idx]
            crop_name = crop_dict_reverse[crop_num]
            probability = probabilities[idx] * 100
            recommendations.append({
                'crop': crop_name.capitalize(),
                'confidence': round(probability, 2)
            })
        # Return recommendations as JSON response
        return jsonify({
            'success': True,
            'recommendations': recommendations
        })
    
    # Handle exceptions and return error message
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

# Run the application
if __name__ == '__main__':
    app.run(debug=True)