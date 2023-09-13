import PropTypes from 'prop-types';

export default function Carts({ selected, cost, remaining }) {
    const h4 = { display: 'flex', alignItems: 'center', border: '2px solid gray', gap: '1rem', borderRadius: '6px', padding: '0px 10px' };
    const img = {marginTop: '5px', width: '40px', height: '40px', borderRadius: '50%', marginBottom: '10px' }
  return (
      <section>
          <h2>Total Member is {selected.length}</h2>
          <p>Total Cost: { cost }</p>
          <p>Remaining: { remaining }</p>
          {selected.map(actor => {
             return <h4 style={h4} key={actor.id}><img style={img} src={actor.image}/>{actor.name}</h4>
          })}
     </section>
  )
}

Carts.propTypes = {
    selected: PropTypes.array.isRequired,
    cost: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}
