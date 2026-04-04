export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-3xl">Contact Us</h1>
      <input className="border p-2 mt-4 w-full" placeholder="Your email" />
      <textarea className="border p-2 mt-4 w-full" placeholder="Message" />
      <button className="bg-black text-white px-4 py-2 mt-4">Send</button>
    </div>
  );
}