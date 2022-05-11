import { useMemo, useState } from 'react';

export default function useModel() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [tables, setTables] = useState([] as string[]);

  const model = useMemo(() => ({
    name,
    status,
    description,
    tables,
  }), [description, name, status, tables]);

  return useMemo(() => [
    model,
    {
      setName,
      setStatus,
      setDescription,
      setTables,
    }
  ] as const, [model]);
}
