const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
      <p className="text-lg text-center">
        For any queries, please reach out to us at contact@namaste-react.com
      </p>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-black p-2 m-2"
        />
        <input
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-green-100 text-green-500 font-bold rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
