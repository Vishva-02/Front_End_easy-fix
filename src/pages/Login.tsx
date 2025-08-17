import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccess("Login successful!");
        setError("");
        navigate("/");
      } else {
        setError(data.error || "Login failed. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f4f1ec] to-[#f9f5f0] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white border border-[#dec195] p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-semibold text-center text-[#bfa76f]">
          Login to Easy Fix
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <Button
          type="submit"
          className="w-full bg-[#bfa76f] text-white hover:bg-[#a78d53] transition duration-200"
        >
          Sign In
        </Button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#bfa76f] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;