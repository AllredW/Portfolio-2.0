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
            <div className="card" data-toggle="modal" data-target="#CardModal1">
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
          {/* Modal Card 1 */}
          <div
            class="modal fade"
            id="CardModal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
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
