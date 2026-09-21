<div align="center">

<img src="./public/assets/branding/ucp-faculty-hub-logo.png" alt="UCP Faculty Hub Logo" width="250" />

# 🎓 UCP Faculty Hub

### Explore. Connect. Discover.

<img
  src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=20&pause=1200&color=2563EB&center=true&vCenter=true&width=700&lines=Explore+UCP+Faculty+Members;Discover+Academic+Departments;Meet+Deans+%26+HODs;Academic+Information+in+One+Place"
  alt="UCP Faculty Hub Animation"
/>

<br/>

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-FFB400?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

## 🌐 Visit Website

[![Visit UCP Faculty Hub](https://img.shields.io/badge/Visit%20Website-UCP%20Faculty%20Hub-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://ucp-facultyhub.vercel.app/)

**[UCP Faculty Hub — Explore. Connect. Discover.](https://ucp-facultyhub.vercel.app/)**

</div>

---

# 🚀 Quick Start

Clone the repository:

```bash
git clone https://github.com/Nouman-Irfan/UCP-Faculty-Hub-Website.git
```

Open the project:

```bash
cd UCP-Faculty-Hub-Website
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL such as:

```text
http://localhost:5173
```

---

# 🌟 About the Project

**UCP Faculty Hub** is a student-developed academic directory designed to make University of Central Punjab faculty information easier to explore.

Instead of searching through multiple university pages, students can use one organized platform to discover:

- 👨‍🏫 Faculty members
- 🏛️ Academic faculties
- 📚 Departments
- 🎓 Deans, Associate Deans & HODs
- 🔬 Research interests
- 📧 Available contact information
- 🔗 Official faculty profile links
- ❓ Help & frequently asked questions
- ✉️ Contact and feedback form

The project focuses on clean design, simple navigation, reusable React components, responsive layouts and easy-to-understand functionality.

---

# ✨ Main Features

<table>
<tr>

<td width="50%" valign="top">

### 👨‍🏫 Faculty Directory

- Search by name
- Search by designation
- Search by department
- Search by research interest
- Filter by faculty
- Filter by department
- View detailed profiles
- Official profile links
- Image fallback support

</td>

<td width="50%" valign="top">

### 🏛️ Department Directory

- Browse departments
- Search departments
- Custom department badges
- Dynamic department routes
- Department-specific faculty listings
- Research profile information

</td>

</tr>

<tr>

<td width="50%" valign="top">

### 🎓 Academic Leadership

- Deans
- Associate Deans
- HODs
- Search functionality
- Role-based filtering
- Detailed profile modal

</td>

<td width="50%" valign="top">

### ❓ Help & FAQ

- Dedicated Help Center
- Six common questions
- Interactive dropdown answers
- Native HTML accordion behavior
- No complicated JavaScript required

</td>

</tr>

<tr>

<td width="50%" valign="top">

### ✉️ Contact Form

- Name field
- Email field
- Subject field
- Message field
- EmailJS integration
- Sending status
- Success message
- Error handling
- Automatic form reset after success

</td>

<td width="50%" valign="top">

### 📱 Responsive Interface

- Responsive layouts
- Faculty grids
- Department grids
- Profile modal
- Academic faculty badges
- Hero section
- Navigation
- Footer

</td>

</tr>
</table>

---

# 📊 Platform Overview

<div align="center">

| 👥 Directory Records | 🏢 Departments | 🎓 Academic Faculties |
| :---: | :---: | :---: |
| **569** | **41** | **9** |

</div>

---

# 🏠 Main Pages

## Home

The homepage introduces the platform through:

- UCP campus hero section
- Faculty and department CTAs
- Platform statistics
- Academic faculty badges
- Popular departments
- Quick access cards
- Help & FAQ access

---

## 👨‍🏫 Faculty Directory

The Faculty page provides the main searchable directory.

Users can search by:

```text
Name
Designation
Department
Faculty
Research Interest
```

Users can also filter records by academic faculty and department.

### Faculty Search Flow

```text
Search Input
    ↓
useState
    ↓
facultyData.filter()
    ↓
Matching Records
    ↓
FacultyCard
```

---

## 🪪 Faculty Profiles

Selecting **View Profile** opens the reusable `FacultyModal`.

Depending on available information, profiles can include:

- Faculty image
- Name
- Designation
- Department
- Faculty
- Email
- Office extension
- Education
- Research interests
- Official UCP profile

---

## 🏛️ Departments

The Departments page automatically creates a unique list of departments from the main faculty dataset.

### Department Flow

```text
facultyData
    ↓
forEach()
    ↓
some()
    ↓
Unique Departments
    ↓
filter()
    ↓
DepartmentCard
```

Each department can be opened through a dynamic route.

Example:

```text
/departments/faculty-of-information-technology-and-computer-science-computer-science
```

---

## 📘 Department Details

Each department page displays:

- Department name
- Parent faculty
- Department badge
- Directory records
- Research profiles
- Faculty members connected with the department

### Working Flow

```text
Department URL
    ↓
useParams()
    ↓
departmentId
    ↓
facultyData.filter()
    ↓
Department Members
    ↓
FacultyCard
    ↓
FacultyModal
```

---

## 🎓 Deans & HODs

The Academic Leadership page extracts leadership records from the main dataset.

Supported roles:

```text
Dean
Associate Dean
HOD
```

Users can search and filter leadership records before opening detailed profiles.

---

## ❓ Help & FAQ

The Help Center provides quick answers to common questions about the platform.

It uses native HTML:

```html
<details>
  <summary>Question</summary>
  Answer
</details>
```

This provides dropdown functionality without requiring separate JavaScript state for every question.

The page currently includes six FAQs covering:

- What UCP Faculty Hub is
- How to find faculty members
- Browsing by department
- Data sources
- Project status
- Missing profile information

---

## ✉️ Contact Form

The Help & FAQ page also contains a contact form powered by **EmailJS**.

Users can submit:

```text
Name
Email
Subject
Message
```

### Contact Form Flow

```text
User fills form
      ↓
Submit
      ↓
status = "sending"
      ↓
EmailJS
      ↓
Success / Error
      ↓
Status message shown
```

React `useState` is used to display:

```text
Sending...
✓ Message sent successfully!
Message could not be sent. Please try again.
```

After successful submission, the form resets automatically.

---

# 🏫 Academic Faculties

The platform includes information from nine UCP faculties:

1. 🏗️ Faculty of Engineering
2. 💻 Faculty of Information Technology & Computer Science
3. 📊 Faculty of Management Sciences
4. 🌍 Faculty of Humanities & Social Sciences
5. 📚 Faculty of Languages & Literature
6. ⚖️ Faculty of Law
7. 🎥 Faculty of Media & Mass Communication
8. 💊 Faculty of Pharmaceutical Sciences
9. 🔬 Faculty of Science & Technology

---

# 🧩 Main React Components

| Component | Purpose |
|---|---|
| `Navbar.jsx` | Main website navigation |
| `Hero.jsx` | Homepage hero section |
| `StatsSection.jsx` | Platform statistics |
| `FacultyBadges.jsx` | Academic faculty showcase |
| `PopularDepartments.jsx` | Popular department section |
| `FacultyCard.jsx` | Reusable faculty profile card |
| `FacultyModal.jsx` | Detailed faculty popup |
| `DepartmentCard.jsx` | Department card |
| `ContactForm.jsx` | EmailJS contact form |
| `Footer.jsx` | Website footer |

### Component Reusability

```text
FacultyCard
   ├── Faculty Page
   ├── Department Details
   └── Deans & HODs

FacultyModal
   ├── Faculty Page
   ├── Department Details
   └── Academic Leadership
```

---

# ⚛️ React Concepts Used

The project demonstrates:

- React components
- Props
- `useState`
- `useRef`
- `useParams`
- React Router
- Dynamic routes
- Conditional rendering
- Event handling
- Form submission
- Search and filtering
- Component reusability
- Environment variables
- Responsive design
- Image fallback handling

---

# 🛠️ Technology Stack

<div align="center">

| Technology | Usage |
| :--- | :--- |
| ⚛️ **React** | Frontend component architecture |
| 🟨 **JavaScript** | Application logic |
| ⚡ **Vite** | Development and build environment |
| 🎨 **Tailwind CSS** | Styling and responsive layouts |
| 🧭 **React Router** | Client-side navigation |
| ✉️ **EmailJS** | Contact form email delivery |
| ▲ **Vercel** | Website deployment |
| 📦 **npm** | Dependency management |

</div>

---

# 🧭 Application Routes

| Route | Page |
|---|---|
| `/` | 🏠 Home |
| `/faculty` | 👨‍🏫 Faculty Directory |
| `/departments` | 🏛️ Departments |
| `/departments/:departmentId` | 📘 Department Details |
| `/deans-hods` | 🎓 Deans & HODs |
| `/help&faq` | ❓ Help & FAQ |
| `/about` | ℹ️ About |

---

# 📁 Project Structure

```text
UCP-Faculty-Hub-Website/
│
├── public/
│   └── assets/
│       ├── branding/
│       │   ├── favicon.png
│       │   └── ucp-faculty-hub-logo.png
│       │
│       ├── department-badges/
│       ├── faculty-badges/
│       │
│       ├── hero/
│       │   ├── hero.jpeg
│       │   └── about.png
│       │
│       └── placeholders/
│           └── faculty-placeholder.png
│
├── src/
│   │
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── DepartmentCard.jsx
│   │   ├── FacultyBadges.jsx
│   │   ├── FacultyCard.jsx
│   │   ├── FacultyModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PopularDepartments.jsx
│   │   └── StatsSection.jsx
│   │
│   ├── data/
│   │   └── facultyData.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── DeansHODs.jsx
│   │   ├── DepartmentDetails.jsx
│   │   ├── Departments.jsx
│   │   ├── Faculty.jsx
│   │   ├── HelpFAQ.jsx
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Environment Variables

EmailJS configuration is handled through environment variables.

Create a `.env` file using `.env.example`:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

The project accesses them through:

```js
import.meta.env.VITE_SERVICE_ID
import.meta.env.VITE_TEMPLATE_ID
import.meta.env.VITE_PUBLIC_KEY
```

For deployment, the same variables are configured in **Vercel Environment Variables**.

The real `.env` file is not committed to the repository.

---

# ✉️ EmailJS Integration

The contact form uses:

```js
emailjs.sendForm()
```

The form fields correspond with the EmailJS template variables:

```text
{{name}}
{{email}}
{{subject}}
{{message}}
```

This allows users to send questions, feedback and suggestions directly through the website without requiring a custom backend.

---

# ⚙️ Overall Application Flow

```text
                         UCP Faculty Hub
                                │
          ┌─────────────────────┼─────────────────────┐
          │                     │                     │
          ▼                     ▼                     ▼
   Faculty Directory       Departments          Leadership
          │                     │                     │
          ▼                     ▼                     ▼
    Search / Filter       Dynamic Routes        Role Filter
          │                     │                     │
          └──────────────┬──────┴──────────────┬─────┘
                         │                     │
                         ▼                     ▼
                    FacultyCard           FacultyModal


                    Help & FAQ
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        FAQ Dropdowns          Contact Form
                                     │
                                     ▼
                                  EmailJS
                                     │
                                     ▼
                                   Email
```

---

# 🎨 User Interface

The website follows a consistent academic visual style:

- 🔵 Blue primary accents
- ⚪ Clean white backgrounds
- ⚫ Slate typography
- 🟡 Small amber highlights
- 🎓 Faculty and department badges
- 🖼️ Academic imagery
- ✨ Subtle hover animations
- 📱 Responsive layouts
- 🔄 Smooth transitions
- 💬 Interactive FAQ dropdowns
- ✉️ Styled contact form

---

# 📚 Data Information

The faculty directory is based on publicly available University of Central Punjab information.

The project avoids intentionally inventing unavailable information.

Because public information differs between profiles, some faculty records contain more details than others.

---

# ⚠️ Disclaimer

> UCP Faculty Hub is a **student academic project** and is not presented as the official University of Central Punjab website.

University names, faculty information, images, branding references and related content belong to their respective owners.

---

<div align="center">

<br/>

<img
  src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=18&pause=1500&color=2563EB&center=true&vCenter=true&width=520&lines=Explore.+Connect.+Discover.;Built+for+Academic+Discovery."
  alt="Footer Animation"
/>

### 🎓 UCP Faculty Hub

**Academic information, organized for students.**

<br/>

### 👨‍💻 Developed by Muhammad Nouman & Aqsa Ismail

<br/>

**React · JavaScript · Vite · Tailwind CSS · EmailJS · Vercel**

</div>
