import React, {useEffect, useState} from 'react';

interface dataCommu {
  id: number;
  name: string;
}
[];
export default function index() {
  const [community, setCommunity] = useState<dataCommu[]>([]);
  const dataCommunity = [
    {id: 1, name: 'Test1'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
  ];
  useEffect(() => {
    setCommunity(dataCommunity);
  }, []);
  return (
    <div>
      <ul>
        {community.map(c => (
          <a
            href="#"
            key={c.id}
          >
            <li>{c.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
