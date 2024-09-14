import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState(null)
  const { state } = useContext(ContextGlobal)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id {id}</h1>
      {dentist && (
        <table>
          <tbody>
            <tr><th>Name</th><td>{dentist.name}</td></tr>
            <tr><th>Email</th><td>{dentist.email}</td></tr>
            <tr><th>Phone</th><td>{dentist.phone}</td></tr>
            <tr><th>Website</th><td>{dentist.website}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Detail