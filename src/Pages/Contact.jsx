import { Label, Textarea, TextInput } from "flowbite-react";
import Sectitle from "../components/Sectitle";
import { useRef } from "react";

function Contact() {
  const formRef = useRef(null); // Ref to form

  const user = {
    name: "Nishad Ravindra Umap",
    email: "umapnishad1@gmail.com",
    mobile: "+91-9307992632",
    country: "INDIA",
  };

  const handleSubmit = (e) => {
    // Let Formspree submit the form
    setTimeout(() => {
      formRef.current.reset(); // Clear form after short delay
    }, 100); // Slight delay ensures Formspree captures the data
  };

  return (
    <div id="contact-section">
      <Sectitle title="Hello World" />
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="w-full lg:w-1/2 lg:-mt-36">
          <h1 className="text-tertiary text-xl">{`{`}</h1>
          {Object.keys(user).map((key) => (
            <h1
              className="flex text-tertiary lg:text-xl ml-4 lg:leading-10"
              key={key}
            >
              <span className="capitalize">&quot;{key}&quot;&nbsp;</span>
              <span>: &quot;{user[key]}&quot;</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-xl">{`}`}</h1>
        </div>

        <div className="w-full lg:w-1/3 my-4">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            action="https://formspree.io/f/xkgrwzpj"
            method="POST"
          >
            <span className="text-lg flex font-serif font-semibold text-center text-tertiary">
              Reach Out to me <span className="ml-2">😃</span>
            </span>

            <div>
              <Label
                htmlFor="name"
                className="font-semibold ml-2 tracking-wider text-tertiary"
              >
                Name
              </Label>
              <TextInput
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="font-semibold ml-2 text-tertiary tracking-wider"
              >
                Email
              </Label>
              <TextInput
                type="email"
                placeholder="Enter Your Email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="message"
                className="font-semibold ml-2 text-tertiary tracking-wider"
              >
                Message
              </Label>
              <Textarea
                placeholder="Enter Your Message"
                id="message"
                name="message"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="text-white hover:text-primary lg:my-2 flex justify-center border-2 border-tertiary hover:bg-tertiary py-1 px-5 hover:lg:px-8 hover:px-7 duration-300"
            >
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
