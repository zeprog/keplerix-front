'use client';
import { Input } from '@/components/ui';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <div className="relative z-10 w-full max-w-lg p-10 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl ring-2 ring-indigo-500/50 hover:ring-indigo-400/50 transition-all duration-500">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        Keplerix
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <label
            htmlFor="username"
            className="block text-lg font-medium text-white"
          >
            Ник
          </label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full px-5 py-3 rounded-md bg-white/10 border border-gray-500 shadow-inner focus:outline-none text-white placeholder-white/60"
            placeholder="Введите ник"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email*
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-5 py-3 rounded-md bg-white/10 border border-gray-500 shadow-inner focus:outline-none text-white placeholder-white/60"
            placeholder="Ваш e-mail"
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-white"
          >
            Пароль*
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full px-5 py-3 rounded-md bg-white/10 border border-gray-500 shadow-inner focus:outline-none text-white placeholder-white/60"
            placeholder="Введите пароль"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold tracking-wide hover:bg-gradient-to-l transition-transform transform hover:scale-105 shadow-lg"
        >
          Зарегистрироваться
        </button>
        <div className='space-y-0 mt-2'>
          <p>Уже есть аккаунт? <Link href="/login">Войти</Link></p>
        </div>
      </form>
    </div>
  );
}