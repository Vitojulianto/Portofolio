import { Helmet } from "react-helmet";
import ProjectCard from "./Fragments/ProjectCard";
import Footer from "./Fragments/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Helmet>
        <title>Vito Julianto | Front-End Developer Portfolio</title>
        <meta name="description" content="Portfolio of Vito Julianto, a Junior Front-End Developer passionate about React." />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <header className="bg-white py-10 shadow">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Hi, I’m Vito Julianto</h1>
          <p className="text-lg">Junior Front-End Developer | React Enthusiast</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate junior front-end developer who loves creating user-friendly interfaces using modern web technologies, especially React. I enjoy solving problems, learning new tools, and constantly improving my craft through hands-on projects.
          Strong in communication, problem-solving, and team collaboration. Eager to learn and adapt to new technologies quickly.
          Currently looking for opportunities as a Front-End Developer where I can contribute to real-world projects, enhance my skills in React ecosystem, and grow in a collaborative tech environment.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          <img src="/icons/html5.svg" alt="HTML" className="h-10" />
          <img src="/icons/css.svg" alt="CSS" className="h-10" />
          <img src="/icons/javascript.svg" alt="JavaScript" className="h-10" />
          <img src="/icons/react.svg" alt="React" className="h-10" />
          <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="h-10" />
          <img src="/icons/vite.svg" alt="Vite" className="h-10" />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            img="/todolist.jpg"
            title="Todo App + Anime Searcher"
            description="Simple Todo app (Create and Delete) and anime searcher with API using React and localStorage."
            demoLink="https://first-react-app-project-4u2q.vercel.app/"
            githubLink="https://github.com/Vitojulianto/FirstReactAppProject"
            
            
          />
          <ProjectCard
            img="/firstproject.jpg"
            title="Movie Store"
            description="Fetches data from API with add-to-cart feature."
            demoLink="https://second-project-movie-store-app-ar8m.vercel.app/"
            githubLink="https://github.com/Vitojulianto/Second-Project---Movie-Store-App"
            
            
          />
          <ProjectCard
            img="/secondproject.jpg"
            title="Movie Store 2.0"
            description="The next version of previous Movie Store with a better UI and UX. Includes cart indicator, toastify, and global state handling."
            demoLink="https://third-react-app-movie-store-2-0-jhf5.vercel.app/"
            githubLink="https://github.com/Vitojulianto/ThirdReactApp---MovieStore-2.0"
            
            
          />
          <ProjectCard
            img="/chatbot.png"
            title="AskMiku Simple Chatbot"
            description="A simple chatbot using dummy data"
            demoLink="https://ask-miku-simple-chatbot-y7d8.vercel.app/"
            githubLink="https://github.com/Vitojulianto/AskMiku---Simple-Chatbot"
            
          />
          <ProjectCard
            img="/admindashboard.png"
            title="Simple Admin Dashboard"
            description="A simple dashboard where we can check the total of users, products, and customers. There is a calender to show the activity that we do"
            demoLink="https://simple-admin-dashboard-nine.vercel.app/"
            githubLink="https://github.com/Vitojulianto/Simple-Admin-Dashboard"
            
          />
        </div>
      </main>

      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a href="https://github.com/Vitojulianto" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white px-6 py-2 rounded-xl shadow hover:bg-gray-600 transition">Visit My Github</a>
          <a href="/Vito Julianto-resume.pdf" download className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-600 transition">Download CV</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;