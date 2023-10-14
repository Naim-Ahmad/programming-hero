import Marquee from "react-fast-marquee"
export default function BreakingNews() {
  return (
    <div className="bg-dark-07 flex gap-6 p-4 my-4">
        <button className="btn btn-secondary">Latest</button>
        <Marquee speed={100}>
          <p className="ml-4">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className="ml-4">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className="ml-4">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
        </Marquee>
        
    </div>
  )
}
