import { useMemo, useState } from 'react';

export default function useUser() {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [friends, setFriends] = useState([] as string[]);

  const user = useMemo(() => ({
    username,
    status,
    description,
    friends,
  }), [description, username, status, friends]);

  return useMemo(() => [
    user,
    {
      setUsername,
      setStatus,
      setDescription,
      setFriends,
    }
  ] as const, [user]);
}
