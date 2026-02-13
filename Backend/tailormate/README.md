# 🍴 TailorMate — Django Tailoring Customers Database Management App

**TailorMate** is a Django-powered recipe management platform where Tailoring Businesses  can register, log in, and manage their Customer Database.  
Each business has their own private customers — only accessible after authentication.  
Built with **Django**, **Django REST Framework (DRF)**, and **PostgreSQL**, TailorMate includes a RESTful API.

---

## 🚀 Features

- ✅ User Registration, Login & Logout 
- ✅ Create, View, Update, and Delete Customer information
- ✅ Each user sees only **their own customers**
- ✅ Token-based API Authentication
- ✅ Pagination and sorting for recipe listings
- ✅ Ingredient management for each recipe
- ✅ Clean validation for time/duration fields
- ✅ Admin interface for superusers

---

## 🧩 Tech Stack

Backend Framework -	Django 5.x
API Framework	- Django REST Framework
Authentication -	DRF Token Auth
Database	= postgreSQL
Frontend	- React
Media Storage	- Django File Storage (images in /media/)

## 🧩 Project Structure
yumbook_backend/
│
├── accounts/                   # User accounts & authentication
│   ├── urls.py                 #routes
│   ├── views.py
│   ├── serializers.py
│   ├── forms.py
│   └── templates/accounts/
│
├── recipes/                    # Recipe management
│   ├── urls.py                 # routes
│   ├── views.py
│   ├── serializers.py
│   ├── models.py
│   └── templates/recipes/
│
├── yumbook_backend/            # Project configuration
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── media/                      # Uploaded images
└── manage.py
---

## 🧑‍🍳 Core Models

### `CustomUser`
Extends Django’s `AbstractUser` with:
- `email` (unique)
- `bio`
- `profile_photo`

### `Customer`
Fields include:
- `name` (FK to `CustomUser`)
- `phone_number`
- `instructions`
- `prep_time`, `cook_time` (with duration validation)
- `images`
- `category`
- `servings`

### `IngredientsQuantity`
- Linked to `Recipe`
- Has `item` and `quantity` fields

---

## 🔐 Authentication

- **HTML Login:** `/accounts/login/`
- **API Token Login:** `POST /accounts/api/login/`
- **API Token Logout:** `POST /accounts/api/logout/`
- **Register (HTML):** `/accounts/register/`
- **Register (API):** `POST /accounts/api/register/`

Use the returned token to access authenticated endpoints:
Authorization: Token your_token_here


---

## 🧪 Testing the API

### 🔹 1. Register a user
`POST /accounts/api/register/`
```json
{
  "business_name": "makariefashion",
  "email": "amy@example.com",
  "password": "strongpassword123"
}

### 🔹 2. Log in to get a token
POST /accounts/api/login/

json

{
  "username": "chefamy",
  "password": "strongpassword123"
}
Response:

json

{
  "token": "abcdef123456...",
  "user": {
    "id": 1,
    "username": "chefamy",
    "email": "amy@example.com"
  }
}

### 🔹 3. Create a recipe
POST /recipes/api/recipes/
(Include token in Authorization header)

json

{
  "title": "Lasagna",
  "instructions": "Layer pasta, meat sauce, and cheese. Bake for 45 minutes.",
  "prep_time": "00:30:00",
  "cook_time": "01:00:00",
  "category": "Italian",
  "servings": 4
}

### 🔹 4. Get your recipes
GET /recipes/api/recipes/

⚙️ Installation & Setup


Access the app:

HTML interface → http://127.0.0.1:8000/

Admin dashboard → http://127.0.0.1:8000/admin/

API endpoints → http://127.0.0.1:8000/recipes/api/

## 🧠 Developer Notes
DRF Pagination is enabled (PAGE_SIZE = 6).

Customers are user-scoped — Businesses can only view, edit, or delete their own customers.



## 🧠 Future Improvements

clothing pictures
appointment booking
collection date
fitting date


🧾 License
This project is licensed under the MIT License.