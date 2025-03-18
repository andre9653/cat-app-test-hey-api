import React from 'react'
import { getCats } from '@/lib/client';
import { client } from '@/lib/client/client.gen';

async function GetCatsServer() {
  client.setConfig({
    baseUrl: 'http://localhost:3000',
    headers: {
      Origin: 'http://localhost:3001',
      'Content-Type': 'application/json',
    },
  });
  const {data} = await getCats({
    cache:'force-cache',
    query: {
      limit: 10
    }
  })

  return (
    <div>
      <h2>
        list of cats
      </h2>

      <table className='table-auto'>
        <thead >
          <tr>
            <th>name</th>
            <th>sexo</th>
            <th>idade</th>
            <th>raça</th>
            <th>cor</th>
            <th>id do dono</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((cat) => (
          <tr key={cat.id}>
            <td
              className='text-capitalize text-primary p-2'
            >{cat.name}</td>
            <td className='text-capitalize text-primary p-2'>{cat.sex}</td>
            <td className='text-capitalize text-primary p-2'>{cat.age}</td>
            <td className='text-capitalize text-primary p-2'>{cat.breed}</td>
            <td className='text-capitalize text-primary p-2'>{cat.color}</td>
            <td className='text-capitalize text-primary p-2'>{cat.ownerId}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetCatsServer
