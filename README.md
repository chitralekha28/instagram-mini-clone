📸 Instagram Mini Clone

A mini Instagram-style full-stack application built as part of a technical assignment.
The project focuses on core social media features such as authentication, following users, creating posts, and viewing a personalized feed.

This project is intentionally kept simple and clean, with emphasis on backend logic, API integration, and a clear user interface.

🚀 Features Implemented
🔐 User Authentication

User signup and login

Password hashing for security

Token-based authentication for protected routes

👥 Follow System

Users can follow and unfollow other users

Relationships are maintained between followers and following

Follow button updates dynamically in the UI

🖼️ Post Creation

Authenticated users can create posts

Each post contains:

Image URL

Caption

❤️ Likes & 💬 Comments (UI ready)

Like and comment sections are displayed on posts

Like count is shown for each post

UI structure supports future extension

📰 Feed

Personalized feed for logged-in users

Feed shows posts only from users they follow

Posts are displayed in reverse chronological order

🖥️ Frontend Overview

The frontend is built using React (Vite) with plain CSS.

Screens included:

Login

Signup

Home Feed

Suggested Users (Follow)

Create Post

The UI is inspired by Instagram’s layout but simplified to match the scope of the assignment.
State management is handled using React hooks, and the UI updates dynamically without page reloads.

🛠️ Backend Overview

The backend is built using Node.js, Express, and MongoDB.

Key backend responsibilities:

Authentication and authorization

Managing users and follow relationships

Handling posts and feed generation

Securing routes using middleware

📸 Screenshots

📌 Screenshots are added below to demonstrate the working of the application.

🔑 Login Page

<img width="305" height="235" alt="image" src="https://github.com/user-attachments/assets/81a9a593-7110-4e43-b0e1-c5c28ec55171" />

🆕 Signup Page

<img width="316" height="244" alt="image" src="https://github.com/user-attachments/assets/0e85b72a-75ee-428a-a496-2e191aa7a90c" />

📰 Home Feed and 👥 Suggested Users & Follow

<img width="533" height="442" alt="image" src="https://github.com/user-attachments/assets/1c4b7539-315f-45d5-aceb-2b4eb907c3c1" />

<img width="524" height="252" alt="image" src="https://github.com/user-attachments/assets/f216c9ac-6aaf-45c1-acde-b01fb8356db5" />

🧪 Testing

The application was tested locally:
Authentication flow was verified

<img width="690" height="352" alt="image" src="https://github.com/user-attachments/assets/585f5c59-e238-4a52-b515-1a409aca8ba5" />

Follow/unfollow functionality was tested

<img width="656" height="338" alt="image" src="https://github.com/user-attachments/assets/c4472b5b-fdd3-4b68-ba1c-4fb02f650ee9" />

Feed updates correctly after following users

<img width="721" height="422" alt="image" src="https://github.com/user-attachments/assets/31ec22c2-228b-41d1-8e8a-8a13f712766a" />

API responses were validated using API testing tools

📌 Notes

This project focuses on core functionality rather than advanced features like reels or stories logic.

Public image URLs are used for simplicity.

The UI is intentionally clean and minimal to maintain clarity.

👤 Author

Chitralekha
B.Tech Student
Interested in Full-Stack Development and Backend Systems

✅ Conclusion

This project demonstrates understanding of:

REST APIs

Authentication and authorization

Database relationships

Frontend–backend integration
Clean UI design

It was built as part of a learning and evaluation process and can be extended further if needed.



