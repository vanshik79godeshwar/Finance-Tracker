
# Capital Compass Finance Tracker

## Overview

The Capital Compass Finance Tracker is a comprehensive website tool designed to simplify financial resource management for users, by helping them visually and interactively manage their dally income and expense, monitor their investments, perform budget calculation, EMI calculation, live rate currency exchange, real time precious metal rates tracking and a feature to communicate with other users on investment decisions through a live-group-chat communication model to obtain better financial decisions and network with other investors. 

## Tech Stack Used

- **Frontend**: React.js, Vite framework
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas Cloud, Mongoose library
- **Web Scraping**: beautifulSoup, pandas
- **Sockets**: Socket.io
- **Styling**: Tailwind CSS
- **Deployment**: Vercel + Render

## Directory Structure

### Root Directory

```
+---Backend
│   ├── package-lock.json
│   ├── package.json
│   ├── render.yaml
│   ├── requirements.txt
│   ├── server.js
│   ├── vercel.json
│   
│   +---config
│       ├── cloudinary.js
│       ├── database.js
│       ├── default.json
│       
│   +---controllers
│       ├── expense.js
│       ├── income.js
│       
│   +---Data
│       ├── etfLive.py
│       ├── nifty-50.csv
│       ├── scrapper1.py
│       ├── sensex.csv
│       
│   +---MiddleWare
│       ├── authMiddleware.js
│       ├── upload.js
│       
│   +---Models
│       ├── Application.js
│       ├── Chatmsg.js
│       ├── ExpenseModel.js
│       ├── IncomeModel.js
│       ├── Job.js
│       ├── JobOpening.js
│       ├── User.js
+---public
│   ├── vite.svg
│   └── +---images
│       ├── gold.jpeg
│       ├── gold.png
│       ├── palladium.png
│       ├── platinum.jpg
│       ├── silver.jpeg
│  
+---node-modules     
+---src
│   ├── App.jsx
│   ├── ChartControl.js
│   ├── index.css
│   ├── main.jsx
│   ├── PrivateRoute.jsx
│   ├── Services.jsx
│   
│   +---assets
│       ├── Brand_LOGO.png
│       ├── code.jpg
│       ├── flower.jpg
│       ├── logo.png
│       ├── pattern1.jpg
│       ├── security.png
│       ├── stratandexec.png
│       ├── video1.mp4
│       ├── video2.mp4
│       ├── video3.mp4
│       
│   +---components
│       ├── Article.css
│       ├── Article.jsx
│       ├── Button.jsx
│       ├── ExpenseForm.jsx
│       ├── FeatureSection.jsx
│       ├── Footer.jsx
│       ├── HeroSection.jsx
│       ├── ImageSlider.jsx
│       ├── IncomeForm.jsx
│       ├── Navbar.jsx
│       ├── Pricing.jsx
│       ├── Testimonials.jsx
│       ├── Workflow.jsx
│       
│   +---User
│       ├── AF.css
│       ├── AnalysisCMP.jsx
│       ├── AnimatedIcon.css
│       ├── AnimatedIcon.jsx
│       ├── AppointmentForm.jsx
│       ├── BudgetCalculator.css
│       ├── BudgetCalculator.jsx
│       ├── Chart1.jsx
│       ├── Chart2.jsx
│       ├── Chart3.jsx
│       ├── Chart4.jsx
│       ├── Chart5.jsx
│       ├── Chart6.jsx
│       ├── Chart7.jsx
│       ├── Chat.jsx
│       ├── CurrencyCMP.jsx
│       ├── CurrencyCMP.module.css
│       ├── Dashboard1CMP.jsx
│       ├── DashboardCMP.jsx
│       ├── EditProfile.jsx
│       ├── EmiCMP.jsx
│       ├── EtfCMP.jsx
│       ├── ExpenseHistory.jsx
│       ├── ExpensesCMP.jsx
│       ├── GoldCMP.jsx
│       ├── Group.jsx
│       ├── HelpCMP.jsx
│       ├── HistoryCMP.jsx
│       ├── IncomeCMP.jsx
│       ├── IncomeItem.jsx
│       ├── Message.jsx
│       ├── PieChart.jsx
│       ├── ProfileCMP.jsx
│       ├── Services.css
│       ├── ServicesBox.jsx
│       ├── SettingsCMP.jsx
│       ├── sidebar.css
│       ├── Sidebar.jsx
│       ├── typewriter.css
│       ├── TypewriterEffect.jsx
│       ├── UserDetailsBox.jsx
│       
│   +---constants
│       ├── index.jsx
│       
│   +---context
│       ├── GlobalContext.jsx
│       
│   +---Page
│       ├── AboutUs.css
│       ├── AboutUs.jsx
│       ├── Analysis.jsx
│       ├── Budget.jsx
│       ├── Career.jsx
│       ├── ContactUs.jsx
│       ├── Currency.jsx
│       ├── Dashboard.jsx
│       ├── EMI.jsx
│       ├── ETF.jsx
│       ├── Expense.jsx
│       ├── Gold.jsx
│       ├── Help.css
│       ├── Help.jsx
│       ├── History.jsx
│       ├── Home.jsx
│       ├── Income.jsx
│       ├── Login.css
│       ├── Login.jsx
│       ├── News.jsx
│       ├── PricingOptions.jsx
│       ├── Profile.jsx
│       ├── Server.jsx
│       ├── Services.jsx
│       ├── Settings.jsx
│       ├── Test.jsx
│       ├── User.jsx
│       
│   +---utils
│       ├── api.js
│       ├── dateFormat.js
│       ├── Icons.jsx
│       

```

## File Summaries and Navigation

### Frontend 

- **`App.jsx`**: Main component that renders the application and sets up routing.
- **`ChartControl.js`**: Handles logic for controlling charts.
- **`index.css`**: Global CSS styles.
- **`main.jsx`**: Entry point for React application.
- **`PrivateRoute.jsx`**: Component for protecting routes requiring authentication.
- **`Services.jsx`**: Page component for displaying services.

#### Assets
- **`assets` Directory**: Contains images and videos used in the app, including logos and background images.

#### Components
- **`Article.jsx`**: Renders articles on the home page.
- **`Button.jsx`**: Custom button component.
- **`ExpenseForm.jsx`**: Form for adding expenses.
- **`FeatureSection.jsx`**: Displays feature sections on the homepage.
- **`Footer.jsx`**: Footer component for the site.
- **`HeroSection.jsx`**: Displays the hero section on the homepage.
- **`ImageSlider.jsx`**: Carousel for displaying images.
- **`IncomeForm.jsx`**: Form for adding income.
- **`Navbar.jsx`**: Navigation bar component.
- **`Pricing.jsx`**: Pricing options component.
- **`Testimonials.jsx`**: Displays user testimonials.
- **`Workflow.jsx`**: Component for showing workflows or processes.

#### User Directory
- **`User` Directory**: Contains various components related to user profiles, dashboards, charts, and messaging.

#### Constants
- **`index.jsx`**: Contains constant values used throughout the application.

#### Context
- **`GlobalContext.jsx`**: Provides global state management for the app.

#### Page Components
- **`AboutUs.jsx`**: Page displaying information about the company.
- **`Analysis.jsx`**: Page for financial analysis.
- **`Budget.jsx`**: Budget management page.
- **`Career.jsx`**: Career opportunities page.
- **`ContactUs.jsx`**: Contact form page.
- **`Currency.jsx`**: Currency management page.
- **`Dashboard.jsx`**: User dashboard page.
- **`EMI.jsx`**: EMI calculator page.
- **`ETF.jsx`**: ETF information page.
- **`Expense.jsx`**: Expense tracking page.
- **`Gold.jsx`**: Gold price tracking page.
- **`Help.jsx`**: Help and FAQ page.
- **`History.jsx`**: Historical data page.
- **`Home.jsx`**: Home page.
- **`Income.jsx`**: Income tracking page.
- **`Login.jsx`**: Login page.
- **`News.jsx`**: Latest news page.
- **`PricingOptions.jsx`**: Subscription pricing options.
- **`Profile.jsx`**: User profile page.
- **`Server.jsx`**: Server-related page or component.
- **`Services.jsx`**: Page displaying services offered.
- **`Settings.jsx`**: User settings page.
- **`Test.jsx`**: Testing page/component.
- **`User.jsx`**: User management page.

#### Utils
- **`api.js`**: Utility functions for API calls.
- **`dateFormat.js`**: Functions for formatting dates.
- **`Icons.jsx`**: Icons used throughout the application.

### Backend (`Backend` Directory)

- **`server.js`**: Main server file for the backend, sets up Express server.
- **`render.yaml`**: Configuration for Render deployment.
- **`requirements.txt`**: Lists Python dependencies.
- **`vercel.json`**: Configuration for Vercel deployment.

#### Config
- **`cloudinary.js`**: Configuration for Cloudinary integration.
- **`database.js`**: Database connection settings.
- **`default.json`**: Default configuration settings.

#### Controllers
- **`expense.js`**: Handles expense-related API requests.
- **`income.js`**: Handles income-related API requests.

#### Data
- **`etfLive.py`**: Python script for live ETF data.
- **`nifty-50.csv`**: Nifty 50 stock data.
- **`scrapper1.py`**: Python script for web scraping.
- **`sensex.csv`**: Sensex stock data.

#### Middleware
- **`authMiddleware.js`**: Middleware for authentication.
- **`upload.js`**: Middleware for file uploads.

#### Models
- **`Application.js`**: Mongoose model for job applications.
- **`Chatmsg.js`**: Mongoose model for chat messages.
- **`ExpenseModel.js`**: Mongoose model for expenses.
- **`IncomeModel.js`**: Mongoose model for income.
- **`Job.js`**: Mongoose model for job postings.
- **`JobOpening.js`**: Mongoose model for job openings.
- **`User.js`**: Mongoose model for user data.

## Running the Application

### Frontend

1. **Navigate to the root directory of the frontend**:
   ```bash
   cd Finance-Tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

### Backend

1. **Navigate to the `Backend` directory**:
   ```bash
   cd Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the backend server**:
   ```bash
   npm run server
   ```

   The backend will be available at `http://localhost:5000`.

## Page Summaries

### Public Pages
- **Home**: Landing page with key features and navigation.
- **About Us**: Information about the company and its mission.
- **Services**: List of services offered.
- **News**: Latest news updates.
- **Contact Us**: Contact form for inquiries and feedback.
- **Career**: Job openings and application form.

### Authenticated Pages (Accessible after sign-in)
- **Profile**: User profile management and settings.
- **Help FAQ**: Frequently asked questions and help resources.
- **Dashboard**: Overview of user financial data and tools.
- **Budget**: Budget planning and tracking.
- **Community Messaging**: Messaging system for community interactions.
- **Live Metal Rate**: Live tracking of metal prices (Gold, Silver, Platinum, Palladium).
- **ETF**: Information and tracking for Nifty and Sensex ETFs.
- **Income**: Income tracking and management.
- **Expense**: Expense tracking and management.
- **Currency**: Currency management and conversion.
- **EMI Calculator**: EMI calculation tool.

### Create .env file of this format 

    
     PORT=
     NEWS_API_KEY=
     MONGO_URI=
     JWT_SECRET=
     EMAIL_USER=
     EMAIL_PASS=
     CLOUDINARY_CLOUD_NAME=
     CLOUDINARY_API_KEY=
     CLOUDINARY_API_SECRET=
    

## Contributing

We welcome contributions to the Finance Tracker project! Here's how you can get involved:

### Steps to Contribute

1. **Fork the Repository**
   - Click on the "Fork" button at the top right of this repository page to create your own copy of the repository.

2. **Clone Your Fork**
   - Clone your forked repository to your local machine:
     ```bash
     https://github.com/vanshik79godeshwar/Finance-Tracker.git
     ```

3. **Create a New Branch**
   - It's good practice to create a new branch for your changes:
     ```bash
     git checkout -b your-feature-branch
     ```

4. **Make Your Changes**
   - Edit, add, or remove files as needed. Make sure to follow the project's coding style and conventions.

5. **Commit Your Changes**
   - Add your changes to the staging area:
     ```bash
     git add .
     ```
   - Commit your changes with a descriptive message:
     ```bash
     git commit -m "Description of the changes"
     ```

6. **Push Your Changes**
   - Push your changes to your forked repository:
     ```bash
     git push origin your-feature-branch
     ```

7. **Create a Pull Request**
   - Go to the original repository on GitHub and click on the "New Pull Request" button.
   - Select your branch and submit a pull request with a detailed description of your changes.

### Other Contribution Methods

- **Reporting Issues**: If you find any bugs or have suggestions, please open an issue on GitHub. Provide as much detail as possible to help us address the issue.
- **Code Reviews**: If you are a collaborator, you can review and provide feedback on pull requests submitted by other contributors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---