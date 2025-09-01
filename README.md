## Features

-   **Advanced Search:** Find products quickly with a keyword search and category filter.
-   **Shopping Cart:** Add products to a cart and review your selection.
-   **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
-   **Modern UI/UX:** A visually appealing interface with a focus on user-friendliness.


## Technology

This project is built with a modern and powerful technology stack:

-   **React:** A JavaScript library for building user interfaces with a component-based architecture.
-   **Vite:** A next-generation frontend tooling that provides a faster and leaner development experience.
-   **React Router DOM:** For handling client-side routing and navigation within the single-page application.
-   **React Bootstrap:** A component library that provides responsive and pre-styled UI elements based on the Bootstrap framework.
-   **Bootstrap Icons:** A rich set of SVG icons for enhancing the user interface.
-   **CSS3:** For custom styling, including the implementation of the glassmorphism effect and other design enhancements.

---

## Page-by-Page Breakdown

### Header (Shared Component)

The header is a seperate component, providing branding, navigation, and search functionality.

-   **Responsive Design:** Utilizes React-Bootstrap's `Navbar` and `Offcanvas` components to create a responsive navigation menu that adapts to different screen sizes.
-   **Persistent Search State:** The search bar and category filter retain their values across navigations. This is achieved by syncing the component's state with URL query parameters using `useSearchParams` and `useEffect`.
-   **Programmatic Navigation:** The `useNavigate` hook is used to redirect users to the search results page upon form submission.
-   **Mobile UX Enhancement:** The offcanvas menu automatically closes upon navigation, providing a smoother user experience on mobile devices. This is managed using `useEffect` and `useLocation`.

### Home Page (`/`)

The main landing page designed to engage users with a dynamic header and a selection of featured products.

-   **Component Composition:** The page is built by combining several reusable components, including `HeaderSlide`, `ProductGrid`, and `Cta`.
-   **Props:** The `ProductGrid` component is passed a limited number of products to feature on the home page, showcasing the use of props for component customization.
-   **Visual Hierarchy:** A large, visually appealing header slide is used to draw the user's attention to key content.

### Shop Page (`/shop`)

Displays all available products in a grid format with pagination, allowing users to browse the entire catalog.

-   **Client-Side Pagination:** The `Pagination` component slices the product data array to display a limited number of products per page. The `useState` hook is used to manage the current page number.
-   **Stateful Logic:** The component maintains the `currentPage` in its state to render the correct subset of products.

### Product Page (`/product/:id`)

Shows detailed information about a single product, allowing users to view images, descriptions, and add the product to their cart.

-   **Dynamic Routing:** Uses the `useParams` hook to retrieve the product `id` from the URL and display the corresponding product details.
-   **Context API:** The `AddToCartButton` component consumes the `CartContext` to add items to the global shopping cart state without the need for prop drilling.

### Search Page (`/search`)

Displays product search results based on user queries and category filters, providing a powerful way for users to find what they're looking for.

-   **URL Query Parameters:** The `useSearchParams` hook is used to read the search query (`q`) and `category` from the URL, enabling shareable search results.
-   **Filtering Logic:** The component filters the main product list based on the query parameters, performing a case-insensitive search on product titles.
-   **Conditional Rendering:** A "No results found" message is displayed if the filtering logic returns no matching products.

### Cart Page (`/cart`)

Shows the items that have been added to the shopping cart, allowing users to review their selections before proceeding to checkout.

-   **Global State Management:** The `useContext` hook is used to access the `cartItems` array from the `CartContext`, providing a centralized way to manage the cart's state.
-   **Data Aggregation:** The component calculates and displays the total number of items in the cart.

### Contact Page (`/contact`)

Provides a form for users to send messages or inquiries.

-   **Controlled Components:** The form fields are controlled components, with their values managed by the `useState` hook.
-   **Event Handling:** The `handleSubmit` function prevents the default form submission and logs the data to the console. In a real-world application, this would be where the data is sent to a server.
-   **Styling:** The form is styled using the `glassy` CSS class to maintain a consistent and modern look.

---

## Core Concepts Explained

-   **Component-Based Architecture:** The application is built using small, reusable components (e.g., `ProductItem`, `Pagination`, `Header`), which makes the code modular, easier to maintain, and more scalable.
-   **Routing with `react-router-dom`:**
    -   `BrowserRouter`: Wraps the application to enable client-side routing.
    -   `Routes` and `Route`: Define the mapping between URL paths and the components to be rendered.
    -   `NavLink` & `Link`: Provide declarative and accessible navigation.
    -   **Hooks:** `useNavigate`, `useParams`, `useLocation`, and `useSearchParams` are used to interact with the router's state and perform navigation actions.
-   **State Management:**
    -   **`useState`:** Used for managing local component state, such as form inputs and the current page in the pagination component.
    -   **`useContext`:** Used for managing global state, specifically the shopping cart. The `CartContext` provides a way for any component in the application to access and modify the cart's state without prop drilling.

## Setup and Installation

To get this project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
This will start the Vite development server and open the application in your default browser.
