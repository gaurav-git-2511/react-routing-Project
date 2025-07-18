import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  console.log(navigate)

  const handleGoBack = () => {
    navigate(-1);
  }

  if (error.status === 404) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-xl w-full text-center">
          <figure className="mb-6">
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page not found"
              className="w-full h-auto mx-auto"
            />
          </figure>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-4">
              The page you are looking for does not exist or has been moved.
            </p>
            <NavLink
              to="/"
              className="inline-block mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-300"
            >
              ⬅️ Back to Home
            </NavLink>

            <button className="inline-block mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-300"
            onClick={handleGoBack}>⬅️Go back</button>
          </div>
        </div>
      </section>
    );
  }
};

export default ErrorPage;
