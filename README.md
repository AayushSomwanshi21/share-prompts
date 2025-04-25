# Share-Prompts 💬✨

A modern web application that allows users to create, manage, and share high-quality AI prompts with a global community. Ideal for developers, writers, and AI enthusiasts looking to explore, reuse, and contribute useful prompts.

---

## 🚀 Features

- 📝 Create, update, and delete your own AI prompts  
- 🌐 Share prompts with the community  
- 🔍 Search prompts by tags or usernames  
- 🔐 Secure Google Authentication via NextAuth  
- 📁 User-friendly profile and prompt management

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** – Full-stack React framework with server-side rendering
- **Tailwind CSS / CSS Modules** – For clean and responsive UI

### Backend & Auth
- **NextAuth.js** – Google OAuth for secure and seamless authentication
- **MongoDB (Mongoose)** – Flexible NoSQL database for storing users and prompts

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/share-prompts.git
cd share-prompts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a .env.local file in the root directory:

    MONGODB_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_secret_key

You can generate NEXTAUTH_SECRET using: 
openssl rand -base64 32

### 4. Run the Development Server
    npm run dev

App will be available at http://localhost:3000

## 🧪 Example Use Case

1. Sign in with Google

2. Create a new prompt with tags

3. View and manage your prompts via your profile

4. Discover prompts shared by others using tag or username search

## 📸 Screenshots

**Main page which user sees when not logged in. It includes posts from different users.**

![Main Page- Before Login](public/assets/screenshots/Screenshot%202025-04-25%20161234.png)

**Main page which user sees when logged in.**

![Main Page-After Login](public/assets/screenshots/Screenshot%202025-04-25%20161252.png)

**Create Post page where user can create a prompt, give it an appropriate tag and post it.**

![Create Post](public/assets/screenshots/Screenshot%202025-04-25%20161403.png)

**Profile Page of the user where the user can edit and delete the posts**

![Profile Page](public/assets/screenshots/Screenshot%202025-04-25%20161316.png)

**Search by username and tag**

![Search-username](public/assets/screenshots/Screenshot%202025-04-25%20161431.png)

![Search-tag](public/assets/screenshots/Screenshot%202025-04-25%20161446.png)


## 💬 Acknowledgements
- Next.js

- NextAuth.js

- MongoDB

- Tailwind CSS
