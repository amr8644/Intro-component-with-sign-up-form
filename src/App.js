import { useState } from "react";

function App() {
  return (
    <main
      className={
        "w-full h-full flex items-center justify-center lg:flex-row sm:flex-col"
      }
    >
      <FirstContainer />
      <SecondContainer />
    </main>
  );
}

const FirstContainer = () => {
  return (
    <div
      className={
        "lg:w-2/5 lg:h-full sm:w-full sm:h-auto sm:mb-10 flex lg:items-start sm:items-center justify-center  text-white  flex-col px-5 lg:text-left sm:text-center"
      }
    >
      <h1 className={"lg:text-5xl sm:text-3xl font-semibold my-5"}>
        Learn to code by watching others.
      </h1>
      <p className={"sm:text-sm"}>
        See how experienced developers solve problems in real-time.
        <br /> Watching scripted tutorials is great, but understanding <br />
        how developers think is invaluable.
      </p>
    </div>
  );
};

const SecondContainer = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const formChecker = () => {
  //   let nameError = "";
  //   let emailError = "";
  //   let passwordError = "";
  //   let isValid = true;

  //   if (person.firstName && person.lastName) {
  //     nameError = "Please enter a value";
  //     isValid = false;
  //   }
  //   if (!person.email.includes("@")) {
  //     emailError = "Please enter a valid email address";
  //     isValid = false;
  //   }
  //   if (person.password.trim().length < 8) {
  //     passwordError = "Password must be miniuim of 8";
  //     isValid = false;
  //   }
  // };
  return (
    <div
      className={
        "lg:w-2/5 lg:h-full sm:w-full sm:h-auto flex items-center  justify-center flex-col"
      }
    >
      <div
        className={
          "lg:w-2/3  sm:w-11/12 flex items-center justify-center rounded-xl bg-Blue  lg:py-2 sm:py-5  sm:px-4 mb-4 shadow-md lg:text-md  sm:text-center"
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
          "bg-white flex flex-col w-11/12 items-center rounded-lg py-3 sm:mb-5"
        }
      >
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          className={`w-11/12 px-2 py-4 my-5  border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md`}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          className={
            "w-11/12 px-2 py-4 my-5   border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={person.email}
          onChange={handleChange}
          className={
            "w-11/12 px-2 py-4 my-5   border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={person.password}
          onChange={handleChange}
          className={
            "w-11/12 px-2 py-4 my-5 border border-GrayishBlue  focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent rounded-md"
          }
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={
            "rounded-sm bg-Green font-Poppins font-semibold w-11/12 py-4  my-5 text-white shadow-2xl hover:opacity-75"
          }
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className={"text-sm sm:text-center sm:px-2"}>
          By clicking the button, you are agreeing to our
          <span className={"font-bold text-Red cursor-pointer px-1"}>
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  );
};

export default App;
