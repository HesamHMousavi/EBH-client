import React, { useState } from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    setMessage("Password successfully reset!");
    // Add API call to update password here
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p className="message">{message}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
