# Micro Task & Earning Platform

A dynamic MERN stack-based micro-tasking and earning platform where **Buyers** can post tasks and **Workers** can complete them to earn coins. The system includes real-time coin-based economy, secure authentication, role-based dashboards, and an admin management panel.

##  Live Site

🔗 [Visit Live Website](https://micro-task-earning-56ea3.web.app/login)

##  Admin Credentials

- **Username/Email:** sabbirkhan@gmail.com
- **Password:** sabbir12

##  Features

1. **Role-based System:** Three types of users – Admin, Buyer, and Worker – each with dedicated dashboards and permissions.
2. **Firebase Authentication:** Secure login/signup with email-password and JWT-protected routes.
3. **Coin Economy:** Coin-based task system where buyers pay workers using coins. Workers earn coins per completed task.
4. **Add Task (Buyer):** Buyers can post tasks by providing task title, details, image, submission info, and reward.
5. **Image Upload with imgbb:** Easily upload and attach task images via imgbb API integration.
6. **Coin Validation Before Posting:** Buyers can’t post tasks unless they have enough coins to pay workers.
7. **Task Submission (Worker):** Workers can view available tasks and submit completed ones for admin approval.
8. **Admin Approval System:** Admin can approve or reject submitted tasks, and coins are only transferred after approval.
9. **Coin Purchase System:** Users can buy coins to continue participating (Stripe or dummy integration ready).
10. **Responsive Design:** Fully mobile-friendly interface built with React, Tailwind CSS, and DaisyUI.

## ⚙ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Axios, React Hook Form, React-icons, React Responsive Carouse
- **Backend:** Node.js, Express.js, MongoDB, JWT, Morgan, Cors
- **Authentication:** Firebase Authentication
- **Image Upload:** imgbb API
- **UI Alerts:** SweetAlert2, React-Hot-Toast

