"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

interface LoginProps {
  onSwitchToSignup: () => void;
}

export default function Login({ onSwitchToSignup }: LoginProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
      console.error("API URL not defined");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }
      router.push("/dashboard");
      console.log("Login success:", data);
      alert("Login successful");

      // If backend returns JWT token:
      // localStorage.setItem('token', data.access_token)
    } catch (error) {
      console.error("Server error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="bg-linear-to-br from-white/10 to-blue-50 p-6 rounded-2xl transition-all duration-300 border border-blue-100 w-90">
      <div className="flex justify-center">
        <Image
          className="w-50"
          alt="logo"
          src={"/logo.png"}
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-800">
        Don&apos;t have an account?{" "}
        <button
          onClick={onSwitchToSignup}
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
