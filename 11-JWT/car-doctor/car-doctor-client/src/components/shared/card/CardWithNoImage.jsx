/* eslint-disable react/prop-types */
export default function CardWithNoImage({ children }) {
  return (
    <div className={`card bg-base-100 shadow-xl border-t-4 border-orange-500`}>
      <div className="card-body">{children}</div>
    </div>
  );
}
