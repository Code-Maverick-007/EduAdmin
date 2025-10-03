🎓 Career Sarthi – Administrator Panel
This is the central administration panel for Career Sarthi, the AI-powered student career guidance platform. This dashboard provides administrators with the tools to manage users, colleges, scholarships, counselors, and monitor platform activity.

🔗 Live Application: https://edu-admin-green.vercel.app/

🌟 Core Features
📊 Dashboard & Analytics
At-a-Glance Overview: A comprehensive dashboard with key metrics:

Total Users (Students)

Total Colleges & Scholarships Listed

Number of Active Counselors

Recent User Activity

Visual Data Representation: Interactive charts and graphs to visualize user growth, popular colleges, and application trends.

👤 User (Student) Management
User Database: View, search, and filter all registered student profiles.

Profile Management: Access and manage student details, including academic history, career interests, and profile completion status.

Administrative Actions: Ability to suspend, unsuspend, or delete user accounts as required.

🏫 College & Scholarship Management
CRUD Operations: Full capabilities to Create, Read, Update, and Delete listings for colleges and scholarships.

Bulk Upload: Feature to add multiple colleges or scholarships at once using a CSV file.

Dynamic Content: Manage detailed information, including admission criteria, deadlines, fees, and eligibility for all listings.

👨‍🏫 Counselor Network Management
Counselor Profiles: Add new counselors and manage their profiles, including specializations, availability, and contact information.

Verification System: A workflow to approve and verify new counselor registrations.

Activity Monitoring: Track counselor-student interaction metrics and performance.

⚙️ Platform Content & Configuration
Content Moderation: Manage and moderate platform content to ensure quality and appropriateness.

AI Model Inputs: (If applicable) Interface to update datasets or parameters for the AI Career Advisor.

Site Settings: Configure general settings for the main student-facing application.

🛠️ Technology Stack
Frontend:

React 18: For building a dynamic and responsive user interface.

React Router: For handling client-side routing.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Recharts/Chart.js: For data visualization and analytics dashboards.

Vite: High-performance build tool for modern web development.

Authentication:

Clerk/Firebase Auth/NextAuth: Secure authentication for administrators with role-based access control.

State Management:

React Context API / Redux Toolkit: For efficient global state management.

Development Tools:

ESLint & Prettier: For maintaining code quality and consistency.

Git: For version control.

🚀 Getting Started
Follow these instructions to get a local copy up and running for development and testing purposes.

Prerequisites
Node.js (v16 or higher)

npm or yarn

Git

Installation
Clone the repository:

Bash

git clone https://github.com/your-repo/career-sarthi-admin.git
Navigate to the project directory:

Bash

cd career-sarthi-admin
Install dependencies:

Bash

npm install
# or
yarn install
Set up environment variables:

Create a .env.local file in the root of your project.

Add the necessary environment variables (e.g., API keys, database URLs). See the .env.example file for reference.

Code snippet

VITE_APP_FIREBASE_API_KEY="your_api_key"
VITE_APP_ADMIN_EMAIL="admin@example.com"
Run the development server:

Bash

npm run dev
# or
yarn dev
Open http://localhost:5173 (or your configured port) to view it in the browser.

🔧 Configuration
Firebase/Backend API: Configure the connection to your backend service in src/config/firebase.js or your API configuration file.

Styling: Customize the theme, colors, and fonts in tailwind.config.js.

Routing: Admin routes and protected paths are defined in src/App.jsx using React Router.

🚀 Deployment
This application is optimized for deployment on modern cloud platforms:

Vercel: Ideal for React applications with seamless Git integration and CI/CD.

Netlify: Another excellent choice for easy deployment and continuous integration.

AWS Amplify/Firebase Hosting: Great options for hosting within a broader cloud ecosystem.

❤️ Built for Career Sarthi
Developed with ❤️ by Omkar Shewale
