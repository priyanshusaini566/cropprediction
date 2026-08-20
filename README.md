<p align="center">
  <img src="https://github.com/user-attachments/assets/974f6ab4-7b29-42f9-ad66-bdac3ae92ef9" width="75" alt="Crop Recommendation System Icon"/>
</p>

<h1 align="center">🌾 CROP RECOMMENDATION SYSTEM</h1>
<h4 align="center">MODEL BUILT USING PYTHON, JUPYTER NOTEBOOK, FLASK, AND JAVASCRIPT</h4>

<p align="center">
  <img src="https://github.com/user-attachments/assets/daa8e441-f20d-40ad-a3d3-e8248ca5bd3e" height="38"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/0ccb0c4d-bdfc-4fe2-be8a-139695b79f08" height="43"/>&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/116de819-50a4-41f7-8a2d-65d8aecc0042" height="33"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/6bfaa1c7-d0cb-4d14-bbcf-ddef317693c9" height="43"/>
</p>

<h4 align="center">DEPLOYED ON RENDER VIA GITHUB</h4>

<p align="center">
  <img src="https://github.com/user-attachments/assets/fe117f9a-8bd3-4161-8af3-9b4104c1f74d" height="23"/>
</p>

---

#### ☁️ Live Application: [https://crop-recommendation-model-huew.onrender.com](https://crop-recommendation-model-huew.onrender.com)

An intelligent, machine learning–powered crop recommendation web application that suggests the most suitable crops to grow based on soil nutrients and environmental conditions. The system analyzes NPK values, temperature, humidity, pH, and rainfall, then predicts the Top-6 best crops with confidence scores using a trained Random Forest classifier.

## 📑 Table of Contents

- [✨ Features](#-features)
- [📜 Dataset](#-dataset)
- [📌 Technology Stack Overview](#-technology-stack-overview)
- [📁 Project Structure](#-project-structure)
- [📋 Input Parameters](#-input-parameters)
- [🔬 Model Performance](#-model-performance)
- [📊 Normalized Confusion Matrix](#-normalized-confusion-matrix)
- [🔌 API Endpoint](#-api-endpoint)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🧪 Model Training & Testing (Optional)](#-model-training--testing-optional)
- [📸 System Screenshots](#-system-screenshots)
- [👤 Created By](#-created-by)
- [📝 License](#-license)

---

## ✨ Features

* **High Accuracy Predictions**: 99.32% model accuracy using Random Forest Classifier
* **Real-time Recommendations**: Get instant crop suggestions with confidence scores
* **Top 6 Crop Analysis**: Displays the best 6 crops ranked by suitability
* **Interactive UI**: User-friendly web interface with visual confidence indicators
* **RESTful API**: JSON-based API for easy integration

---

## 📜 Dataset

- **Link**: [https://github.com/PAIshanMadusha/crop-recommendation-model/blob/main/dataset/Crop_recommendation.csv](https://github.com/PAIshanMadusha/crop-recommendation-model/blob/main/dataset/Crop_recommendation.csv)
- **Source**: [Crop Recommendation Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset)
- **Crops**: 22 different crop types:
> Rice, Maize, Chickpea, Kidney Beans, Pigeon Peas, Moth Beans, Mung Bean, Black Gram, Lentil, Pomegranate, Banana, Mango, Grapes, Watermelon, Muskmelon, Apple, Orange, Papaya, Coconut, Cotton, Jute, Coffee
- **Features**: 7 environmental and soil parameters:
> N, P, K, Temperature, Humidity, pH, Rainfall

---

## 📌 Technology Stack Overview
The following technologies are used in this project:

| Layer        | Technologies | Description |
|--------------|-------------|-------------|
| **Development** | Visual Studio Code, Jupyter Notebook | Model development, experimentation, debugging, and project development environment |
| **Backend**  | Python, Flask, Scikit-Learn, NumPy, Pickle | Handles machine learning model prediction, data processing, and API endpoints |
| **Frontend** | HTML, CSS, JavaScript | Provides interactive UI for entering inputs and displaying crop recommendations |
| **Deployment** | Render, Gunicorn | Production server setup and cloud hosting for live application access |

---

## 📁 Project Structure
The following structure is used for this project:

```
crop-recommendation-model/
│
├── dataset/                        # Dataset used for training the model
│   └── Crop_recommendation.csv
├── model/
│   └── crop_model_complete.pkl     # Saved trained model
├── notebooks/                      # Jupyter notebooks for development and experimentation
│   └── crop_recommendation_model.ipynb
├── static/                         # Static frontend assets (CSS, JS & images)
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   └── js/
│       └── app.js
├── templates/                      # Main frontend user interface
│   └── index.html
├── venv/                           # Virtual environment
├── .gitignore
├── app.py                          # Core Flask backend application
├── LICENSE
├── Procfile
├── README.md
└── requirements.txt                # All python dependencies

```

---

## 📋 Input Parameters
The model uses the following 7 environmental and soil parameters:

| Parameter   | Description                               | Unit      | Why Useful for Crop Recommendation |
|-------------|-------------------------------------------|-----------|------------------------------------|
| **N**       | Nitrogen content in soil                  | ratio     | Essential for plant growth and leaf development; affects crop productivity |
| **P**       | Phosphorus content in soil                | ratio     | Supports root development, flowering, and fruit production |
| **K**       | Potassium content in soil                 | ratio     | Improves disease resistance, drought tolerance, and overall crop strength |
| **Temperature** | Atmospheric temperature               | °C        | Determines suitable growing conditions and crop survival capability |
| **Humidity** | Relative humidity                        | %         | Influences plant transpiration, moisture retention, and growth quality |
| **pH**      | Soil acidity/alkalinity level             | 0–14 scale| Different crops grow best in specific pH ranges; affects nutrient absorption |
| **Rainfall**| Annual/seasonal rainfall                  | mm        | Determines water availability, irrigation needs, and crop suitability |


---

## 🔬 Model Performance
Multiple machine learning algorithms were evaluated during development:

| Algorithm | Accuracy |
|-----------|----------|
| **RandomForestClassifier** | **99.32%** ✓ |
| GaussianNB | 99.55% |
| DecisionTreeClassifier | 98.41% |
| GradientBoostingClassifier | 98.18% |
| BaggingClassifier | 99.09% |
| SVC | 96.82% |
| KNeighborsClassifier | 96.59% |
| LogisticRegression | 96.36% |
| ExtraTreeClassifier | 90.90% |
| AdaBoostClassifier | 14.54% |

* **Final Model Chosen:** `RandomForestClassifier`:  
> It was selected for deployment due to its **high accuracy, robustness, ability to handle nonlinear relationships, and strong performance across diverse environmental conditions.**

### 📊 Normalized Confusion Matrix

| The normalized confusion matrix visualizes the model’s performance across all crop classes by showing how accurately each crop type is predicted compared to its actual label.|
| ----------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/user-attachments/assets/628578ab-ef00-41d9-9d8f-fd4ccf58e54c" width="700"></p> |

---

## 🔌 API Endpoint
`POST /predict`, takes soil nutrient values and environmental conditions as input and returns the Top-6 most suitable crops along with their confidence scores predicted by the trained machine learning model.

### ✅ Request Body
Send a JSON object with the following parameters:

```json
{
 "N": 70,
 "P": 40,
 "K": 40,
 "temperature": 20,
 "humidity": 80,
 "ph": 6.5,
 "rainfall": 100
}
```

### ✅ Successful Response
Returns `success = true` with a ranked list of crop recommendations and confidence scores:

```json
{
 "success": true,
 "recommendations": [
  {"crop": "Rice", "confidence": 26.00},
  {"crop": "Jute", "confidence": 24.00},
  {"crop": "Maize", "confidence": 12.00},
  {"crop": "Banana", "confidence": 10.00},
  {"crop": "Papaya", "confidence": 8.00},
  {"crop": "Cotton", "confidence": 6.00}
 ]
}
```

---

## ⚙️ Installation & Setup
Follow these steps to run the project locally:

#### 1. ✅ Clone the Repository
```bash
git clone https://github.com/PAIshanMadusha/crop-recommendation-model.git
````

#### 2. ✅ Navigate to the Project Directory

```bash
cd crop-recommendation-model
```

#### 3. ✅ Create & Activate Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```

#### 4. ✅ Install Dependencies

```bash
pip install -r requirements.txt
```

#### 5. ▶️ Run the Application

```bash
python app.py
```

#### 6. ✅ Open in Browser

```
http://127.0.0.1:5000
```

---

## 🧪 Model Training & Testing (Optional)
You can train and test the model using the Jupyter Notebook:

#### 1. 📂 Open the Notebook File

```bash
crop-recommendation-model/notebooks/crop_recommendation_model.ipynb
```

#### 2. ✅ Create & Activate Virtual Environment (if not already done)

```bash
python -m venv venv

# Activate
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```

#### 3. 🧰 Install Jupyter Notebook & Launch

```bash
pip install jupyter notebook
jupyter notebook
```

#### * Then open `crop_recommendation_model.ipynb` and run the cells step by step.

## 📸 System Screenshots:

---
<p align="center">
  <img src="https://github.com/user-attachments/assets/bb54d5e3-3360-4b1d-8582-c66b7c716288" alt="Screenshot 1" width="800">
  </br>
  <img src="https://github.com/user-attachments/assets/648a8960-2ea1-4f49-b3c5-734ff6d92e10" alt="Screenshot 1" width="800">
</p>

---

### 👤 Created By
**Ishan Madhusha**  
GitHub: [PAIshanMadusha](https://github.com/PAIshanMadusha)  

Feel free to explore my work and reach out if you'd like to collaborate! 🚀

---

## 📝 License
This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.
