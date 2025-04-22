'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';

interface LoginProps {
  onSuccess: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;

    if (email === 'secure123@gmail.com' && password === 'Secure@123') {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate async operation
      setErrorMessage('');
      reset();
      onSuccess();
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <section className="py-[40px] px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <Image
            src="/images/015hero.jpg"
            alt="Happy client"
            width={750}
            height={893}
            style={{ height: '550px' }}
            className="rounded-lg shadow-lg w-full transform transition duration-1000 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-[#03afef] bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
            Login
          </h2>
          <p className="text-gray-600 mb-6">Use the credentials below to access your account.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
                className={`w-full text-black px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && <p className="text-red-500 text-sm pt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                placeholder="Enter your password"
                className={`w-full text-black px-3 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm pt-1">{errors.password.message}</p>
              )}
            </div>

            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#03afef] text-white py-3 px-4 rounded-md hover:[#0996ca] transition"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
