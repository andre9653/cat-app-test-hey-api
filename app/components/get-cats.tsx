import { getCatsOptions } from '@/lib/client/@tanstack/react-query.gen';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function GetCats() {
  const { data, error } = useQuery({
    ...getCatsOptions({
      query:{limit: 10}
    }),
  });

  console.log(data)
  if (!data?.length || error) return null
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

export default GetCats
