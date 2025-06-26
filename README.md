# 🎯 **NariNiti: Empowering Women Entrepreneurs through AI-Driven Financial Inclusion and Literacy**

---

## 📚 **Project Overview**

**NariNiti** is a comprehensive AI-powered platform designed to **empower women entrepreneurs** by addressing critical challenges in:

- ✅ **Access to Finance:** AI-powered credit scoring using **XGBoost with SHAP** ensures fair evaluation and enhanced loan approvals.  
- ✅ **Financial Literacy:** A personalized recommender system using **SVD Collaborative Filtering** tailors learning paths based on user profiles.  
- ✅ **Mentorship Networks:** AI-driven mentor matching using **KNN algorithms** connects entrepreneurs with industry experts for personalized guidance.  
- ✅ **Market Linkages:** A procurement and e-commerce hub using **Collaborative Filtering** improves MSMEs’ revenue by integrating them into supply chains.  
- ✅ **Fraud Detection (Future Scope):** AI-based anomaly detection flags high-risk loan applications to minimize default risks.

---

## 🔥 **Core Features**

| Feature                          | AI Model/Technique                  | Objective                                  |
|-----------------------------------|-------------------------------------|--------------------------------------------|
| AI Credit Score Prediction        | XGBoost + SHAP                      | Predict creditworthiness with explainability |
| Financial Literacy Recommender     | SVD Collaborative Filtering        | Recommend personalized learning programs  |
| Mentorship Matching System         | K-Nearest Neighbors (KNN)           | Connect women entrepreneurs with mentors  |
| Market Linkage & Procurement Hub   | Collaborative Filtering Model      | Link MSMEs to supply chains and e-commerce |
| Fraud Detection (Future Scope)     | AI-based Anomaly Detection          | Identify high-risk applications            |

---

## ⚡️ **Technical Architecture**

### 📊 **Data Flow and Model Workflow**

1. **Data Collection:**  
   - User data, including financial history, entrepreneurial profile, and business needs.  
   - Alternative data such as utility payments, digital transactions, and e-commerce activity.  

2. **Data Preprocessing:**  
   - Cleaning, normalization, and feature engineering to prepare data for model ingestion.  

3. **Model Training:**  
   - XGBoost for credit scoring, SVD for financial literacy recommendations, and KNN for mentor matching.  

4. **Model Deployment:**  
   - Flask APIs to serve AI models with integration into the frontend platform.  

---


## 🚀 **How to Run the Project Locally**

### 📦 **Prerequisites**

1. Python 3.11+  
2. Flask  
3. Scikit-Learn, XGBoost, Surprise, and other dependencies  
4. Chart.js/Matplotlib for visualization  

---

### 🔧 **Step 1: Clone the Repository**

```bash
git clone https://github.com/your-github-username/nariniti.git
cd nariniti
```
### 🖥️ Step 2: Set Up Virtual Environment
```
# Create virtual environment

python3 -m venv venv

# Activate virtual environment
# Windows

venv\Scripts\activate

# macOS/Linux

source venv/bin/activate
```
### ⚙️ Step 3: Run Backend API

```
# Navigate to backend directory
cd backend

# Run Flask API
python app.py

# Install dependencies
pip install -r requirements.txt
```

### 🎨 Step 4: Run Frontend Application

```
# Navigate to frontend directory
cd ../frontend

# Run the application
npm install
npm start
```


