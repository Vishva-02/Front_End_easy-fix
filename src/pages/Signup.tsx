import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Signup successful!");
        navigate("/login");
      } else {
        alert(data.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f4f1ec] to-[#f9f5f0] px-4">
      <form
        onSubmit={handleSignup}
        className="bg-white border border-[#dec195] p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-semibold text-center text-[#bfa76f]">
          Create an Account
        </h2>

        <div className="flex space-x-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
          value={form.email}
          onChange={handleChange}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm pr-10 focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
            value={form.password}
            onChange={handleChange}
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Retype Password"
            className="w-full px-4 py-2 border border-[#e0d4b2] rounded-lg shadow-sm pr-10 focus:ring-2 focus:ring-[#bfa76f] focus:outline-none"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#bfa76f] text-white hover:bg-[#a78d53] transition duration-200"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
