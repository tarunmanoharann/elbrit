# React Components Library

This repository contains reusable, responsive React components styled using modular CSS. Each component is designed with best practices for responsiveness, accessibility, and reusability. Below is the detailed documentation of all components created in this project.

# Published link : https://ishaq-elbrit-task.netlify.app/

---

## Components

### 1. **VerifiedComponent**

- **Description**:
  - A visually appealing component with six child containers.
  - Each child container includes:
    - An image
    - A heading
    - A paragraph
  - The child containers are slightly elevated above the background container.

- **Features**:
  - Desktop:
    - Displays three columns in a row.
  - Mobile:
    - Displays two columns in a row.

- **Files**:
  - `src/components/VerifiedComponent.jsx`
  - `src/styles/VerifiedComponent.module.css`

---

### 2. **IngredientsComponent**

- **Description**:
  - Displays ingredients in two rows:
    - **Row 1**: 3 items with varying widths.
    - **Row 2**: 4 items with varying widths.
  - Each item contains:
    - A background image
    - A heading
    - A paragraph
    - A "View More" link

- **Features**:
  - Desktop:
    - Items are displayed in two rows (3 columns in the first row, 4 columns in the second).
  - Mobile:
    - Each item takes up the full width.

- **Files**:
  - `src/components/IngredientsComponent.jsx`
  - `src/styles/IngredientsComponent.module.css`

---

### 3. **LatestNewsComponent**

- **Description**:
  - A container with four parent containers.
  - Each parent container includes:
    - Two child containers with background images of varying heights.
    - Each child container has two paragraphs overlaid on the image.

- **Features**:
  - Desktop:
    - Displays four columns.
  - Mobile:
    - Displays only one parent container at a time.
    - Each child container takes up full width.

- **Files**:
  - `src/components/LatestNewsComponent.jsx`
  - `src/styles/LatestNewsComponent.module.css`

---

### 4. **ContactUsComponent**

- **Description**:
  - A background container with three inner containers.
  - Each inner container includes:
    - An image
    - Two paragraphs, displayed side by side.

- **Features**:
  - Desktop:
    - Items are displayed in a row.
  - Mobile:
    - Items are stacked vertically in a column.

- **Files**:
  - `src/components/ContactUsComponent.jsx`
  - `src/styles/ContactUsComponent.module.css`

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/react-components-library.git
