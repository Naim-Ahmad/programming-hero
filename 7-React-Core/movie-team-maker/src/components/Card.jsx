import PropTypes from 'prop-types';

function Card({ actor, selectActor }) {
    const { name, image, salary, role } = actor;
  return (
      <div className='card'>
          <figure style={{textAlign: 'center'}}>
              <img style={{width: '80px', borderRadius: '50%', marginBottom: '10px'}} src={image} alt="" />
            <figcaption>{ name }</figcaption>
          </figure>
          <div className='card-body'>
              <p>Salary: ${salary}</p>
              <p>profession: { role }</p>
          </div>
          <button className='select-btn' onClick={()=> selectActor(actor)}>Select</button>
    </div>
  )
}

Card.propTypes = {
    actor: PropTypes.object.isRequired,
    selectActor: PropTypes.func
}

export default Card
