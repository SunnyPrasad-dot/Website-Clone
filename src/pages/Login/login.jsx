
import React, { useState, useEffect } from "react";
import "./login.css"; // create a matching CSS file

export default function LoginPage() {
  const [email, setEmail] = useState("");

  // Email validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handlers
  const handleNextClick = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Email signup clicked:", email);
    alert(`Sign up with email: ${email}`);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    alert(`Sign up with ${provider}`);
  };

  const handleLinkClick = (type) => {
    console.log(`${type} link clicked`);
    if (type === "terms") window.open("#", "_blank");
    else if (type === "privacy") window.open("#", "_blank");
  };

  useEffect(() => {
    console.log("ModeSens Login Page initialized");
    document.getElementById("emailInput").focus();
  }, []);

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="brand-title">MODESENS</h1>
        <h2 className="brand-subtitle">BEFORE YOU BUY</h2>
        <p className="brand-tagline">
          Get the best prices on your favorite designer brands with the world's
          most intelligent shopping assistant.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="logo">M</div>

        <div className="signup-form">
          <h1 className="signup-heading">Sign up now</h1>
          <p className="signup-subheading">
            Compare prices across 800+ vetted stores—all in one place.
          </p>

          {/* Email Input */}
          <input
            type="email"
            className="email-input"
            id="emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNextClick()}
            autoComplete="email"
          />

          {/* Next Button */}
          <button className="next-button" onClick={handleNextClick}>
            NEXT
          </button>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="social-buttons">
            <button
              className="social-button google"
              onClick={() => handleSocialLogin("Google")}
            >
              Google
            </button>
            <button
              className="social-button apple"
              onClick={() => handleSocialLogin("Apple")}
            >
              Apple
            </button>
            <button
              className="social-button wechat"
              onClick={() => handleSocialLogin("WeChat")}
            >
              WeChat
            </button>
          </div>

          {/* Footer Text */}
          <p className="footer-text">
            By entering your email, you agree to the{" "}
            <span
              className="footer-link"
              onClick={() => handleLinkClick("terms")}
            >
              Terms Of Use
            </span>{" "}
            and the{" "}
            <span
              className="footer-link"
              onClick={() => handleLinkClick("privacy")}
            >
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
