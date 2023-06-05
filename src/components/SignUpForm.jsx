// ./src/components/SignUpForm.jsx
import { useState } from 'react';
import { useId } from 'react';

import { Button } from '@/components/Button'

export function SignUpForm() {
  let id = useId()
  const [email, setEmail] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      alert(error);
      return;
    }

    alert('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe} className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Электронный адрес
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Эл. адрес"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text:[0.8125rem]/6"
      />
      <Button type="submit" arrow>
        Получать обновления
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}
