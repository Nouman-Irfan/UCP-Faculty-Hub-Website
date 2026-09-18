# UCP-Faculty-Hub-Website
🎓 **UCP Faculty Hub Website** is a modern React-based academic directory for the University of Central Punjab. 👨‍🏫 Explore faculty profiles, departments, Deans &amp; HODs, research interests, and contact details through a clean, responsive interface built with ⚛️ React, JavaScript, and Tailwind CSS.
<div align="center">

<img src="./public/assets/branding/ucp-faculty-hub-logo.png" alt="UCP Faculty Hub Logo" width="250" />

# 🎓 UCP Faculty Hub Website

### Explore. Connect. Discover.

<img
  src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=20&pause=1200&color=2563EB&center=true&vCenter=true&width=700&lines=Explore+UCP+Faculty+Members;Discover+Academic+Departments;Meet+Deans+%26+Heads+of+Departments;Academic+Information+in+One+Organized+Platform"
  alt="UCP Faculty Hub Animation"
/>

<br/>

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-Navigation-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

</div>

---

<div align="center">

## 🌐 Visit Website

[![Visit UCP Faculty Hub](https://img.shields.io/badge/Visit%20Live%20Website-UCP%20Faculty%20Hub-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://ucp-facultyhub.vercel.app/)

**🔗 [UCP Faculty Hub — Explore. Connect. Discover.](https://ucp-facultyhub.vercel.app/)**

</div>

---

## 🌟 About UCP Faculty Hub

**UCP Faculty Hub** is a modern academic directory designed to make faculty information from the **University of Central Punjab** easier to explore.

Instead of searching through multiple university pages, students can use one organized interface to discover:

- 👨‍🏫 Faculty members
- 🏛️ Academic faculties
- 📚 Departments
- 🎓 Deans & Heads of Departments
- 🔬 Research interests
- 📧 Available contact information
- 🔗 Official faculty profile links

The website focuses on a clean academic design, simple navigation, reusable React components, responsive layouts, and easy-to-understand search and filtering.

---

## ✨ Main Features

<table>
<tr>

<td width="50%" valign="top">

### 👨‍🏫 Faculty Directory

Search and explore faculty records through an organized directory.

**Features**

- Search by faculty member name
- Search by designation
- Search by department
- Search by research interest
- Filter by academic faculty
- Filter by department
- View detailed faculty profiles
- Official UCP profile links
- Image fallback support

</td>

<td width="50%" valign="top">

### 🏛️ Department Directory

Browse academic departments through a dedicated department directory.

**Features**

- Search departments
- Search by faculty name
- Custom department badges
- Dynamic department routes
- Department-specific faculty listings
- Research profile information

</td>

</tr>

<tr>

<td width="50%" valign="top">

### 🎓 Academic Leadership

Dedicated page for academic leadership.

**Includes**

- Deans
- Associate Deans
- Heads of Departments
- Search functionality
- Role-based filtering
- Detailed profile modal

</td>

<td width="50%" valign="top">

### 📱 Responsive Interface

The website adapts across different screen sizes using Tailwind CSS.

**Responsive areas**

- Navigation
- Hero section
- Faculty grids
- Department grids
- Faculty badges
- Profile modal
- About page
- Footer

</td>

</tr>
</table>

---

## 📊 Platform Overview

<div align="center">

| 👥 Directory Records | 🏢 Departments | 🎓 Academic Faculties |
| :---: | :---: | :---: |
| **569** | **41** | **9** |

</div>

---

## 🏠 Home Page

The homepage introduces the UCP Faculty Hub through a modern academic landing experience.

### Home includes

- 🌇 UCP campus hero image
- 🎯 Faculty directory call-to-action
- 🏛️ Department directory call-to-action
- 📊 Platform statistics
- 🎓 Academic faculty showcase
- ⭐ Popular departments
- 🧭 Main navigation
- 📌 Project footer

### Hero Experience

The hero section combines:

```text
UCP Campus Background
        ↓
Dark Gradient Overlay
        ↓
Main Heading
        ↓
Supporting Description
        ↓
Explore Faculty + View Departments
```

It creates a clear first impression while keeping the UCP campus visible.

---

## 👨‍🏫 Faculty Directory

The Faculty page contains the main searchable directory.

Users can search through fields such as:

```text
Name
Designation
Department
Faculty
Research Interests
```

### Search Flow

```text
User Types Search
        ↓
search state updates
        ↓
facultyData.filter()
        ↓
Matching records remain
        ↓
.map()
        ↓
FacultyCard displayed
```

### Faculty Filters

Users can also filter by:

- 🎓 Academic Faculty
- 🏢 Department

Search and filters work together so users can narrow down results easily.

---

## 🪪 Faculty Profile Modal

Clicking **View Profile** opens a reusable faculty profile modal.

Depending on available information, the modal may display:

- 👤 Faculty image
- 📝 Name
- 💼 Designation
- 🏢 Department
- 🎓 Faculty
- 📧 Email
- ☎️ Office extension
- 🎓 Education
- 🔬 Research interests
- 🔗 Official UCP profile

If an image is unavailable, a fallback placeholder is displayed automatically.

---

## 🏛️ Departments

The Departments page automatically builds a unique department directory from the main faculty dataset.

### Working Flow

```text
facultyData
     ↓
forEach()
     ↓
Read person's department
     ↓
some()
     ↓
Check if department already exists
     ↓
push()
     ↓
Add only unique departments
     ↓
filter()
     ↓
Search departments
     ↓
map()
     ↓
DepartmentCard
```

This prevents duplicate departments from appearing.

---

## 🔗 Dynamic Department Pages

Each department has its own dynamic route.

Example:

```text
/departments/faculty-of-information-technology-and-computer-science-computer-science
```

The route is defined using:

```jsx
<Route
  path="/departments/:departmentId"
  element={<DepartmentDetails />}
/>
```

The department ID is accessed using:

```js
useParams()
```

---

## 📘 Department Details

The Department Details page finds all people belonging to the selected department.

### Flow

```text
Department URL
      ↓
useParams()
      ↓
departmentId
      ↓
facultyData.filter()
      ↓
departmentPeople
      ↓
FacultyCard
      ↓
FacultyModal
```

The page can display:

- 🏢 Department name
- 🎓 Parent faculty
- 🖼️ Department badge
- 👥 Directory records
- 🔬 Research profiles
- 👨‍🏫 People associated with the department

---

## 🎓 Deans & HODs

The Academic Leadership page first extracts leadership records from the main dataset.

### Supported Roles

```text
Dean
Associate Dean
HOD
```

### Leadership Flow

```text
facultyData
      ↓
filter()
      ↓
Dean / Associate Dean / HOD
      ↓
Search Filter
      ↓
Role Filter
      ↓
FacultyCard
      ↓
FacultyModal
```

Users can search using:

- Name
- Designation
- Department
- Faculty

---

## 🏫 Academic Faculties

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

The Home page presents these through custom faculty badge artwork.

---

## 🧩 Reusable Components

One of the main goals of the project is to avoid repeating the same UI code.

### `FacultyCard.jsx`

Used on:

```text
Faculty Page
Department Details
Deans & HODs
```

Displays:

- Faculty image
- Name
- Designation
- Department
- Faculty
- View Profile button

---

### `FacultyModal.jsx`

Reusable profile popup used across multiple pages.

---

### `DepartmentCard.jsx`

Displays department information and links to the correct dynamic department page.

---

### `FacultyBadges.jsx`

Displays the nine academic faculties on the homepage.

---

### `Hero.jsx`

Contains the main campus hero section and primary navigation actions.

---

### `StatsSection.jsx`

Displays:

```text
569 Directory Records
41 Departments
9 Academic Faculties
```

---

### `PopularDepartments.jsx`

Highlights selected departments from the academic directory.

---

## 🔄 Component Reusability

```text
                FacultyCard
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Faculty    Department   Deans & HODs
      Page       Details        Page


                FacultyModal
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Faculty    Department   Leadership
      Page       Details        Page
```

This keeps the interface consistent and reduces duplicate code.

---

## 🔍 Search System

The application uses standard JavaScript array methods.

```js
filter()
map()
some()
forEach()
includes()
```

Example faculty search logic:

```js
const filteredFaculty = facultyData.filter(person => {

  const searchText = search.toLowerCase()

  const matchesSearch =
    person.name.toLowerCase().includes(searchText) ||
    person.designation.toLowerCase().includes(searchText) ||
    person.department.toLowerCase().includes(searchText) ||
    (person.researchInterests || []).some(interest =>
      interest.toLowerCase().includes(searchText)
    )

  return matchesSearch
})
```

This allows the interface to update instantly as users search.

---

## 🧠 JavaScript Methods Used

| Method | Purpose |
|---|---|
| `forEach()` | Goes through every array item |
| `some()` | Checks whether at least one item matches |
| `push()` | Adds an item to an array |
| `filter()` | Creates an array of matching records |
| `map()` | Displays UI for every record |
| `includes()` | Checks whether text contains search text |
| `toLowerCase()` | Makes search case-insensitive |

---

## ⚛️ React Concepts Used

The project demonstrates:

- ⚛️ React Components
- 📦 Props
- 🧠 `useState`
- 🧭 `useParams`
- 🔀 React Router
- 🔍 Search filtering
- 🎯 Conditional rendering
- 🖱️ Event handling
- ♻️ Component reusability
- 🧩 Dynamic routes
- 📱 Responsive design
- 🖼️ Image fallback handling

---

## 🛠️ Technology Stack

<div align="center">

| Technology | Usage |
| :--- | :--- |
| ⚛️ **React** | Frontend component architecture |
| 🟨 **JavaScript** | Application logic |
| ⚡ **Vite** | Development and build environment |
| 🎨 **Tailwind CSS** | Styling and responsive layouts |
| 🧭 **React Router** | Client-side navigation |
| 📦 **npm** | Dependency management |

</div>

---

## 🧭 Application Routes

| Route | Page |
|---|---|
| `/` | 🏠 Home |
| `/faculty` | 👨‍🏫 Faculty Directory |
| `/departments` | 🏛️ Departments |
| `/departments/:departmentId` | 📘 Department Details |
| `/deans-hods` | 🎓 Deans & HODs |
| `/about` | ℹ️ About |

---

## 📁 Project Structure

```text
UCP-Faculty-Hub-Website/
│
├── public/
│   │
│   └── assets/
│       │
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
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🖼️ Image Handling

Faculty images use fallback handling to prevent broken profile images.

```jsx
<img
  src={person.image || "/assets/placeholders/faculty-placeholder.png"}
  alt={person.name}
  onError={(e) => {
    e.currentTarget.src =
      "/assets/placeholders/faculty-placeholder.png"
  }}
/>
```

If the original profile image cannot be loaded:

```text
Official Image
      ↓
Loading fails
      ↓
onError()
      ↓
Faculty Placeholder
```

---

## ▶️ How to Run the Project

### 1️⃣ Requirements

Make sure you have:

```text
Node.js
npm
```

installed on your computer.

---

### 2️⃣ Open the Project Folder

Open the project using **Visual Studio Code** or another code editor.

---

### 3️⃣ Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

This installs the packages required by the application.

---

### 4️⃣ Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

You will see a local address similar to:

```text
http://localhost:5173
```

Open it in your browser.

---

### 5️⃣ Create a Production Build

To generate the optimized production files:

```bash
npm run build
```

The generated build will be placed inside:

```text
dist/
```

---

## ⚙️ Application Working Flow

```text
                    ┌──────────────────────┐
                    │    facultyData.js    │
                    │ Single Data Source   │
                    └──────────┬───────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
           ▼                   ▼                   ▼
   Faculty Directory      Departments       Academic Leadership
           │                   │                   │
           ▼                   ▼                   ▼
      Search/Filter       Unique Dept List     Role Filtering
           │                   │                   │
           ▼                   ▼                   ▼
      FacultyCard        DepartmentCard       FacultyCard
           │                   │                   │
           │                   ▼                   │
           │           DepartmentDetails          │
           │                   │                   │
           └──────────────┬────┴────┬──────────────┘
                          │         │
                          ▼         ▼
                     FacultyCard  FacultyModal
```

---

## 🎨 User Interface Design

The project uses a consistent visual language based around:

- 🔵 UCP-inspired blue accents
- ⚪ Clean white surfaces
- ⚫ Slate typography
- 🟡 Small amber highlights
- 🖼️ Academic imagery
- 🎓 Faculty and department badges
- ✨ Subtle hover animations

Interactive elements use transitions such as:

```text
Card lift
Image scale
Text color transition
Arrow movement
Shadow transition
Button hover
```

These interactions are intentionally subtle so the interface remains professional.

---

## 📚 Data Information

The faculty directory is built using publicly available University of Central Punjab information.

The project avoids intentionally inventing information that was not publicly available.

Because availability differs between profiles, some records may contain more details than others.

---

## ⚠️ Disclaimer

> This website is a **student academic project** and is not presented as the official University of Central Punjab website.

University names, faculty information, images, branding references, and related content belong to their respective owners.

---

<div align="center">

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=18&pause=1500&color=2563EB&center=true&vCenter=true&width=500&lines=Explore.+Connect.+Discover.;Built+for+Academic+Discovery." alt="Footer Animation" />

### 🎓 UCP Faculty Hub

**Academic information, organized for students.**

<br/>

### 👨‍💻 Developed by Muhammad Nouman & Aqsa Ismail

<br/>

**React** · **JavaScript** · **Vite** · **Tailwind CSS**

<br/>

⭐ **Explore the project and discover the UCP academic community.**

</div>
