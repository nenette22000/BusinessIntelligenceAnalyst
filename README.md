# BusinessIntelligenceAnalyst

Business Intelligence Report:

Title: Analysis of Customer Purchasing Behavior

Objective: To analyze customer purchasing behavior and identify trends, patterns, and correlations that can inform business decisions.

Dataset: A sample dataset of 149,000 customer transactions, including demographic information, purchase history, and transaction details.

Step 1: Data Cleaning and Preprocessing

Imported the dataset into a pandas dataframe using Python.
Checked for missing values and handled them using mean imputation.
Converted categorical variables into numerical variables using one-hot encoding.
Scaled the data using standardization to ensure all variables are on the same scale.

Step 2: Exploratory Data Analysis (EDA)

Used matplotlib and seaborn libraries to visualize the distribution of variables, including histograms, box plots, and scatter plots.
Identified correlations between variables using a correlation matrix.
Analyzed the distribution of customer demographics, including age, gender, and location.

Step 3: Clustering Analysis

Used k-means clustering to segment customers based on their purchasing behavior.
Identified three clusters: high-value customers, medium-value customers, and low-value customers.
Analyzed the characteristics of each cluster, including demographics, purchase frequency, and average order value.

Step 4: Predictive Modeling

Used a random forest classifier to predict customer churn based on their purchasing behavior and demographics.
Trained the model on 80% of the data and tested it on 20% of the data.
Evaluated the model's performance using accuracy, precision, and recall metrics.

Step 5: Data Visualization

Used Tableau to create interactive dashboards to visualize the findings.
Created a dashboard to display customer demographics, purchase history, and transaction details.
Created a dashboard to display the results of the clustering analysis and predictive modeling.

Summary of Findings:

High-value customers tend to be older, male, and located in urban areas.
Medium-value customers tend to be younger, female, and located in suburban areas.
Low-value customers tend to be younger, male, and located in rural areas.
The random forest classifier was able to predict customer churn with an accuracy of 85%.
Recommendations:

Target high-value customers with personalized marketing campaigns to increase loyalty and retention.
Offer loyalty programs and discounts to medium-value customers to increase purchase frequency and average order value.
Use data-driven insights to inform product development and marketing strategies to attract and retain low-value customers.
