// Define a functional component named App
export default function App() {

  // Render the main content of the application (index/home page)
  return (
    <main>
      <div className="viewheight__container">
        <div className="center-xy__container">
          <small className="fw-bold">Hello 🖐🏽, From <span className="badge theme py-1 px-2">@creator-txn</span> &#x1F604;</small>
          <h1 className="pb-4">#OPENSOURCE</h1>
          <a className="btn btn-outline__theme" href="/blogs">Read More</a>
          <div className="d-flex justify-content-end mt-5">
            <small className="fw-bold">Made w/ Next.js v14.1</small>
          </div>
        </div>
      </div>
    </main>
  );
}