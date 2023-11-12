/* eslint-disable react/prop-types */

export default function CheckoutAddServices({ handler, children }) {
  return (
    <div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#F3F3F3] p-8"
        onSubmit={handler}
      >
        {children}
      </form>
    </div>
  );
}
