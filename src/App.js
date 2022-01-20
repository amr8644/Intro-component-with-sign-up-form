function App() {
  return (
    <main className={"w-full h-full flex items-center justify-center"}>
      <FirstContainer />
      <SecondContainer />
    </main>
  );
}

const FirstContainer = () => {
  return (
    <div
      className={
        "w-2/5 h-full flex items-start justify-center text-white  flex-col px-5 text-left"
      }
    >
      <h1 className={"text-5xl font-semibold my-5"}>
        Learn to code by watching others.
      </h1>
      <p className={""}>
        {" "}
        See how experienced developers solve problems in real-time.
        <br /> Watching scripted tutorials is great, but understanding <br />{" "}
        how developers think is invaluable.{" "}
      </p>
    </div>
  );
};

const SecondContainer = () => {
  return (
    <div className={"w-1/2 h-full flex items-center  justify-center flex-col"}>
      <div
        className={
          "w-2/3 flex items-center justify-center rounded-xl bg-Blue  py-2 mb-4 shadow-md text-md"
        }
      >
        <p className={"font-medium text-white"}>
          Try it free 7 days{" "}
          <span className={"font-light text-GrayishBlue"}>
            then $20/mo. thereafter
          </span>
        </p>
      </div>
      <form
        className={
          "bg-white flex flex-col w-11/12 items-center rounded-lg py-3"
        }
      >
        <input
          type="text"
          placeholder="First Name"
          className={
            "w-11/12 px-2 py-4 my-5  border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          className={
            "w-11/12 px-2 py-4 my-5   border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <input
          type="email"
          placeholder="Email Address"
          className={
            "w-11/12 px-2 py-4 my-5   border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <input
          type="password"
          placeholder="Password"
          className={
            "w-11/12 px-2 py-4 my-5 border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />

        <button
          type="button"
          className={
            "rounded-sm bg-Green font-Poppins font-semibold w-11/12 py-4  my-5 text-white shadow-2xl hover:opacity-75"
          }
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p>
          By clicking the button, you are agreeing to our Terms and Services
        </p>
      </form>
    </div>
  );
};

export default App;
