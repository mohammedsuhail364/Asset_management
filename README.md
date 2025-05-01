# 🛠️ Asset Management System

A web-based application built with Node.js to help organizations manage and track their hardware assets—like laptops, mobile phones, and tools—assigned to employees.

---

## 🚀 Objective

To streamline the tracking, issuing, returning, and scrapping of tangible company assets, ensuring accountability, reducing misuse, and improving visibility of asset utilization.

---

## 📋 Features

### 🧑 Employee Master
- Add/Edit/View employees
- Search and filter by active/inactive status

### 💻 Asset Master
- Add/Edit/View assets with unique serial numbers
- Filter by asset type
- Search by make/model

### 📦 Asset Category Master
- Define asset categories like Laptop, Phone, Tools, etc.

### 📊 Stock View
- View all in-stock assets grouped by branch
- Display total count and value in the footer

### 📤 Issue Asset
- Assign assets to employees
- Maintain record of issue

### 📥 Return Asset
- Record asset returns with reason (repair, resignation, etc.)

### 🗑️ Scrap Asset
- Mark assets as obsolete (no longer assignable)
- Only visible in scrap reports

### 🧾 Asset History
- View full lifecycle of an asset (purchase → issue → return → scrap)

---

## 🧑‍💻 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Backend      | Node.js (Express.js)      |
| Database     | PostgreSQL                |
| ORM          | Sequelize ORM             |
| Templating   | Jade (Pug)                |
| UI Framework | Bootstrap, CSS            |
| Tables       | DataTables.net            |

---

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```
   bash
   git clone https://github.com/yourusername/asset-management-system.git
   cd asset-management-system

2 . Install dependencies

npm install

3 . Configure PostgreSQL

Set DB connection in .env or config/config.json

Create database and run migrations:

npx sequelize db:create
npx sequelize db:migrate

4 . Start the application

npm start

📂 Folder Structure

.
├── models/            # Sequelize models
├── routes/            # Route definitions
├── controllers/       # Route logic handlers
├── views/             # Jade templates
├── public/            # Static assets (CSS/JS)
├── config/            # Sequelize & DB config
├── app.js             # Entry point
└── README.md

📌 License
This project is licensed under the MIT License.

👨‍💻 Author
Mohammed Suhail S
