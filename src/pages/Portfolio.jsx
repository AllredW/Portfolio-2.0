export default function PortfolioPage() {
  return (
    <>
      <h2>Portfolio</h2>
      <p>
        Here are some examples of my work. Feel free to take a look over the
        repositories for these projects, and their deployed applications.
      </p>
      <div className="container text-center">
        <div className="row align-items-end">
          {/* Cards for portfolio projects */}
          <div className="col-4">
            {/* Card 1 */}
            <div className="card">
              <img
                src="assets/Shelfie Logo Thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Shelfie</h3>
              </div>
            </div>
            </div>
            {/* Card 2 */}
            <div className="col-4">
            <div className="card">
              <img
                src="assets/Employee Tracker Thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Employee Database</h3>
              </div>
            </div>
            </div>
            {/* Card 3 */}
            <div className="col-4">
            <div className="card">
              <img
                src="assets/PWA Text Editor Thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">PWA Text Editor</h3>
              </div>
            </div>
            </div>
            {/* Card 4 */}
            <div className="col-4">
            <div className="card">
              <img
                src="assets\svg-maker-thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">SVG Logo Creator</h3>
              </div>
            </div>
            </div>
            {/* Card 5 */}
            <div className="col-4">
            <div className="card">
              <img
                src="assets\Social Network API Thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Social Network API</h3>
              </div>
            </div>
            </div>
            {/* Card 6 */}
            <div className="col-4">
            <div className="card">
              <img
                src="assets\Weather Dashboard Thumb.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">API Weather Dashboard</h3>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
