"use client";

import { useEffect, useState } from "react";
import ToastMessage from "../institutions/helpers/ToastMessage";

const HeroSlider = () => {
  const [isUpdatesVisible, setIsUpdatesVisible] = useState(true);
  const [showUpdatesPopup, setShowUpdatesPopup] = useState(false);
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    state: "",
    program: "",
    course: "",
    message: "",
    agreeToTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const programs = [
    { name: "B.E", courses: ["BME", "CSE", "ECE", "MECH", "CS&E"] },
    { name: "B.TECH", courses: ["AGRI", "AI&DS", "IT", "LE"] },
    { name: "M.E", courses: [] },
    { name: "Pharmacy", courses: ["PHARM.D", "M.PHARM", "B.PHARM", "B.PHARM(LE)", "D.PHARM"] },
    { name: "Nursing", courses: ["B.Sc Nursing"] },
    { name: "Allied Health Science", courses: ["B.Sc (CT)", "B.Sc (RIT)", "B.Sc (OT&AT)", "B.Sc (OPTOMETRY)", "B.Sc (MLT)", "B.Sc (CPPCT)"] },
  ];

  // Handle responsive behavior
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Show updates popup on mobile/tablet on load
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setShowUpdatesPopup(true), 500);
      return () => clearTimeout(timer);
    } else {
      // Ensure popup is closed on desktop
      setShowUpdatesPopup(false);
    }
  }, [isMobile]);

  // Prevent scroll when popups are open
  useEffect(() => {
    if (showUpdatesPopup || showAdmissionPopup) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [showUpdatesPopup, showAdmissionPopup]);

  // Listen for global event to open admission popup
  useEffect(() => {
    const openHandler = () => setShowAdmissionPopup(true);
    window.addEventListener("openAdmissionPopup", openHandler);
    return () => window.removeEventListener("openAdmissionPopup", openHandler);
  }, []);

  const toggleUpdatesVisibility = () => setIsUpdatesVisible((v) => !v);
  const closeUpdatesPopup = () => setShowUpdatesPopup(false);
  const openAdmissionPopup = () => setShowAdmissionPopup(true);
  const closeAdmissionPopup = () => setShowAdmissionPopup(false);

  const handleCourseFocus = (e) => {
    if (window.innerWidth <= 480) {
      try {
        e.target.size = 6;
      } catch (err) {}
    }
  };

  const handleCourseBlur = (e) => {
    if (window.innerWidth <= 480) {
      try {
        e.target.size = 1;
      } catch (err) {}
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (name === "program") {
        return { ...prev, program: value, course: "" };
      }
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });

    if ((name === "course" || name === "program") && window.innerWidth <= 480) {
      try {
        e.target.size = 1;
      } catch (err) {}
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      ToastMessage.errorMessage("Please agree to the terms and privacy policy.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = { ...formData };
      const response = await fetch("https://apiaakam360.yugan.tech/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server responded ${response.status}: ${text}`);
      }

      let data = null;
      try {
        data = await response.json();
      } catch (err) {}
      console.log("Admission submission success:", data || "OK");

      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        city: "",
        state: "",
        program: "",
        course: "",
        message: "",
        agreeToTerms: false,
      });
      closeAdmissionPopup();
      ToastMessage.successMessage("Thank you for your enquiry! We'll contact you soon.");
    } catch (err) {
      console.error("Admission submission failed:", err);
      ToastMessage.errorMessage("There was an error submitting your enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="hero-banner hero-style-1 bg-image">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="video-background">
            <source src="/assets/video/college.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-content-overlay">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content">
                <h1 className="hero-title">Sri Shanmugha Educational Institutions</h1>
                <h2 className="hero-subtitle">Innovate and Inspire</h2>
                <p className="hero-description">
                  Pioneering Innovation in Higher Education Since 2010. With 15+ Years of Educational Excellence, 20,000+ Students Transformed, 100+ Quality Awards, and 95% Placement Success.
                </p>
                <div className="hero-cta-buttons">
                  <button className="btn btn-primary" onClick={openAdmissionPopup}>
                    Apply Now
                  </button>
                  <a href="/assets/docs/brochure.pdf" className="btn btn-secondary" download>
                    Download Brochure
                  </a>
                </div>
              </div>

              {/* Desktop Updates Panel */}
              <aside
                className={`campus-updates desktop-panel ${isUpdatesVisible ? "visible" : "hidden"}`}
                aria-live="polite"
                aria-hidden={!isUpdatesVisible}
              >
                <div className="updates-header">
                  <h3>Campus Updates</h3>
                  <p>Notifications & alerts</p>
                </div>
                <div className="updates-content">
                  <div className="update-item highlight">
                    <h4>Admissions Open 2025–26</h4>
                    <p>Application now being accepted for all programs</p>
                  </div>
                  <div className="update-item stat">
                    <span className="update-number">3500+</span>
                    <span className="update-label">Students</span>
                  </div>
                  <div className="update-item">
                    <h4>100% Placements</h4>
                  </div>
                  <div className="contact-info">
                    <p className="phone">0428-335-9999</p>
                    <p className="email">admissions@shanmugha.edu.in</p>
                    <p className="address">Sankari, Salem, TN</p>
                  </div>
                </div>
              </aside>

              {/* Desktop Toggle Button */}
              <button
                className={`updates-toggle desktop-toggle ${!isUpdatesVisible ? "visible" : "hidden"}`}
                onClick={toggleUpdatesVisibility}
                aria-label="Show updates"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Updates Popup */}
      {showUpdatesPopup && (
        <div className="mobile-updates-popup-overlay" role="dialog" aria-modal="true">
          <div className="mobile-updates-popup">
            <aside className="campus-updates popup-card">
              <div className="updates-header">
                <h3>Campus Updates</h3>
                <p>Notifications & alerts</p>
                <button 
                  className="close-updates" 
                  onClick={closeUpdatesPopup} 
                  aria-label="Close updates popup"
                  title="Close this popup"
                >
                  &times;
                </button>
              </div>
              <div className="updates-content">
                <div className="update-item highlight">
                  <h4>Admissions Open 2025–26</h4>
                  <p>Application now being accepted for all programs</p>
                </div>
                <div className="update-item stat">
                  <span className="update-number">3500+</span>
                  <span className="update-label">Students</span>
                </div>
                <div className="update-item">
                  <h4>100% Placements</h4>
                </div>
                <div className="contact-info">
                  <p className="phone">0428-335-9999</p>
                  <p className="email">admissions@shanmugha.edu.in</p>
                  <p className="address">Sankari, Salem, TN</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* Admission Enquiry Popup */}
      {showAdmissionPopup && (
        <div className="popup-overlay" role="dialog" aria-modal="true">
          <div className="popup-container">
            <div className="admission-popup">
              <div className="popup-header">
                <h3>Admission Enquiry</h3>
                <button className="close-popup" onClick={closeAdmissionPopup} aria-label="Close admission enquiry">
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="admission-form">
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="mobileNumber">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your state"
                    />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="program">Program *</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      onFocus={handleCourseFocus}
                      onBlur={handleCourseBlur}
                      required
                    >
                      <option value="">Select a program</option>
                      {programs.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="course">Course {formData.program && programs.find((p) => p.name === formData.program)?.courses.length > 0 ? "*" : ""}</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      onFocus={handleCourseFocus}
                      onBlur={handleCourseBlur}
                      required={
                        (programs.find((p) => p.name === formData.program)?.courses || []).length > 0
                      }
                      disabled={
                        (programs.find((p) => p.name === formData.program)?.courses || []).length === 0
                      }
                    >
                      <option value="">
                        {formData.program
                          ? (programs.find((p) => p.name === formData.program)?.courses || []).length > 0
                            ? "Select a course"
                            : "No courses available"
                          : "Select a program first"}
                      </option>
                      {(programs.find((p) => p.name === formData.program)?.courses || []).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group full">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional information or queries"
                    rows="3"
                  />
                </div>

                <div className="form-group consent-group">
                  <label className="simple-checkbox">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="box"></span>
                    By submitting this form, I consent to receive communications from the Sri Shanmugha Educational Institutions through WhatsApp, SMS, Email, phone Calls, and other channels, even if my number is registered with DND/NDNC. *
                  </label>
                </div>

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
        }

        /* ============ HERO BANNER ============ */
        .hero-banner {
          position: relative;
          width: 100%;
          height: 95vh;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
          min-height: 600px;
          background: linear-gradient(180deg, rgba(66, 95, 189, 0.85) 0%, rgba(66, 95, 189, 0.5) 50%, rgba(66, 95, 189, 0.2) 100%);
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .video-background {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          object-fit: cover;
          z-index: 1;
        }

        .hero-content-overlay {
          position: absolute;
          inset: 0;
          
          z-index: 2;
          display: flex;
          align-items: center;
          color: white;
        }

        .container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-layout {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        
        }

        .hero-content {
          flex: 0 0 auto;
          min-width: 300px;
          max-width: 550px;
          margin-top: 5%;
        }

        .hero-title {
          font-size: clamp(28px, 5vw, 45px);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: clamp(24px, 4vw, 48px);
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #facc15;
        }

        .hero-description {
          font-size: clamp(14px, 2.5vw, 16px);
          line-height: 1.55;
          margin-bottom: 2rem;
          color: #fff;
          font-weight: 400;
        }

        .hero-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 620px;
          z-index: 5;
          position: relative;
        }

        .btn {
          text-align: center;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: clamp(14px, 2vw, 16px);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          box-sizing: border-box;
          display: block;
          text-decoration: none;
        }

        .btn-primary {
          background-color: #facc15;
          border-color: #facc15;
          color: rgb(7, 46, 162);
        }

        .btn-primary:hover {
          background: transparent;
          border-color: #fff;
          color: #fff;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        /* ============ CAMPUS UPDATES PANEL ============ */
        .campus-updates {
          width: 100%;
          max-width: 400px;
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          color: #1f2937;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          text-align: center;
          max-height: 75vh;
          overflow-y: auto;
          position: relative;
          z-index: 3;
        }

        .campus-updates.visible {
          display: block;
          opacity: 1;
        }

        .campus-updates.hidden {
          display: none;
          opacity: 0;
        }

        .updates-header {
          position: relative;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .updates-header h3 {
          margin: 0;
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 700;
          color: #111827;
        }

        .updates-header p {
          margin: 6px 0 0;
          font-size: clamp(14px, 2vw, 16px);
          color: #6b7280;
        }

        .close-updates {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.04);
          border: none;
          border-radius: 8px;
          width: 34px;
          height: 34px;
          font-size: 20px;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #4b5563;
          z-index: 4;
          transition: all 0.2s;
        }

        .close-updates:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #111827;
        }

        .updates-content {
          max-height: calc(75vh - 100px);
          overflow-y: auto;
        }

        .update-item {
          margin-bottom: 14px;
        }

        .update-item.highlight {
          background: #e8f5e9;
          border-radius: 10px;
          padding: 10px;
        }

        .update-item h4 {
          margin: 0 0 6px;
          font-size: clamp(14px, 2vw, 16px);
          color: #111827;
          font-weight: 600;
        }

        .update-item p {
          margin: 0;
          font-size: clamp(13px, 1.8vw, 14px);
          color: #4b5563;
        }

        .update-item.stat .update-number {
          display: block;
          font-size: clamp(24px, 5vw, 32px);
          font-weight: 800;
          color: #3b82f6;
        }

        .update-item.stat .update-label {
          font-size: clamp(12px, 1.8vw, 14px);
          color: #6b7280;
        }

        .contact-info {
          margin-top: 10px;
        }

        .contact-info p {
          margin: 4px 0;
          font-size: clamp(12px, 2vw, 14px);
          word-break: break-word;
        }

        .contact-info .email {
          color: #2563eb;
        }

        /* ============ UPDATES TOGGLE ============ */
        .updates-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: none;
          align-items: center;
          gap: 8px;
          background: rgba(17, 24, 39, 0.92);
          color: #fff;
          border: 0;
          outline: none;
          border-radius: 9999px;
          padding: 12px 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          z-index: 5;
          cursor: pointer;
          font-weight: 600;
          font-size: clamp(12px, 2vw, 14px);
          transition: all 0.2s ease;
        }

        .updates-toggle:hover {
          background: rgba(17, 24, 39, 1);
          transform: translateY(-2px);
        }

        .updates-toggle.visible {
          display: flex;
        }

        .updates-toggle.hidden {
          display: none;
        }

        /* ============ POPUPS ============ */
        .mobile-updates-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          animation: fadeIn 0.3s ease;
        }

        .mobile-updates-popup {
          width: 100%;
          max-width: 420px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-card {
          width: 100%;
          max-width: 400px;
          max-height: 80vh;
        }

        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .popup-container {
          width: 100%;
          max-width: 500px;
          max-height: 90vh;
          box-sizing: border-box;
          animation: slideUp 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .admission-popup {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
        }

        .popup-header {
          background: #facc15;
          color: #111827;
          padding: clamp(16px, 3vw, 24px);
          position: relative;
          flex-shrink: 0;
        }

        .popup-header h3 {
          margin: 0;
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 600;
          text-align: center;
        }

        .close-popup {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 24px;
          color: #111827;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: all 0.2s;
        }

        .close-popup:hover {
          background: rgba(0, 0, 0, 0.2);
        }

        /* ============ FORM STYLING ============ */
        .admission-form {
          padding: clamp(16px, 4vw, 32px);
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          min-height: 0;
          /* Hide scrollbar while keeping scroll functionality */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
        .admission-form::-webkit-scrollbar {
          display: none;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(12px, 3vw, 16px);
          margin-bottom: clamp(16px, 3vw, 20px);
          flex-shrink: 0;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .form-group.half {
          width: 100%;
        }

        .form-group.full {
          grid-column: 1 / -1;
          width: 100%;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: clamp(12px, 2vw, 14px);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: clamp(10px, 2vw, 12px) clamp(12px, 2vw, 16px);
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: clamp(14px, 2vw, 16px);
          font-family: "Poppins", sans-serif;
          transition: all 0.2s;
          box-sizing: border-box;
          background: white;
          color: #111827;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #425fbd;
          box-shadow: 0 0 0 3px rgba(66, 95, 189, 0.1);
          background: white;
        }

        .form-group input:disabled,
        .form-group select:disabled {
          background-color: #f3f4f6;
          cursor: not-allowed;
          color: #9ca3af;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .consent-group {
          margin-top: 12px;
          margin-bottom: clamp(16px, 3vw, 24px);
          grid-column: 1 / -1;
        }

        .simple-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          cursor: pointer;
          font-size: clamp(12px, 2vw, 14px);
          line-height: 1.5;
          color: #374151;
        }

        .simple-checkbox input {
          display: none;
        }

        .simple-checkbox .box {
          width: 16px;
          height: 16px;
          border: 1.5px solid #14b8a6;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .simple-checkbox input:checked + .box::after {
          content: "✓";
          font-size: 12px;
          color: #14b8a6;
          line-height: 1;
        }

        .submit-btn {
          grid-column: 1 / -1;
          width: 100%;
          background: linear-gradient(135deg, #425fbd, #2d4ab3);
          color: white;
          border: none;
          border-radius: 8px;
          padding: clamp(12px, 2vw, 16px);
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: auto;
          flex-shrink: 0;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(66, 95, 189, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ============ DESKTOP STYLES (1025px+) ============ */
        @media (min-width: 1025px) {
          .hero-layout {
            flex-wrap: nowrap;
            gap: 40px;
          }

          .hero-content {
            margin-left: -7%;
          }

          .desktop-panel {
            display: block !important;
            margin-top: 4%;
            margin-right: 2%;
            flex-shrink: 0;
          }

          .desktop-toggle {
            display: none !important;
          }

          .mobile-updates-popup-overlay {
            display: none !important;
          }
        }

        /* ============ TABLET STYLES (769px - 1024px) ============ */
        @media (768px < width <= 1024px) {
          .hero-banner {
            height: 100vh;
          }

          .hero-layout {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
            margin-left: 0;
            margin-top: 10%;
            padding: 0 15px;
          }

          .desktop-panel {
            display: none;
          }

          .desktop-toggle {
            display: none;
          }

          .mobile-updates-popup-overlay {
            display: flex;
          }

          .popup-container {
            max-height: 85vh;
          }

          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ============ MOBILE STYLES (max 768px) ============ */
        @media (max-width: 768px) {
          .hero-banner {
            height: 100vh;
            min-height: 600px;
          }

          .hero-layout {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            gap: 20px;
            padding-left: 3%;
            padding-right: 3%;
          }

          .hero-content {
            max-width: 100%;
            margin-left: 0;
            margin-top: 15%;
            padding: 0;
          }

          .hero-title {
            line-height: 1.1;
          }

          .hero-cta-buttons {
            margin: 0;
            width: 100%;
            max-width: 100%;
            padding: 0;
          }

          .desktop-panel {
            display: none !important;
          }

          .desktop-toggle {
            display: none !important;
          }

          .mobile-updates-popup-overlay {
            display: flex;
          }

          .popup-card {
            max-height: 75vh;
            width: 95%;
            padding: 16px;
          }

          .popup-container {
            max-height: 85vh;
            max-width: 95%;
          }

          .popup-header {
            padding: 16px 12px;
          }

          .popup-header h3 {
            font-size: 18px;
          }

          .close-popup {
            width: 32px;
            height: 32px;
            font-size: 20px;
          }

          .admission-form {
            padding: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .form-group.half {
            width: 100%;
          }
        }

        /* ============ SMALL MOBILE (max 480px) ============ */
        @media (max-width: 480px) {
          .hero-banner {
            height: 100vh;
            min-height: 500px;
          }

          .hero-content {
            margin-top: 20%;
            padding: 0 12px;
          }

          .hero-title {
            font-size: 24px;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 20px;
            margin-bottom: 1rem;
          }

          .hero-description {
            font-size: 13px;
            margin-bottom: 1.5rem;
          }

          .btn {
            padding: 12px 16px;
            font-size: 14px;
          }

          .popup-card {
            width: 100%;
            max-width: 90vw;
            border-radius: 12px;
          }

          .popup-container {
            max-width: 90vw;
            padding: 8px;
          }

          .admission-popup {
            border-radius: 12px;
          }

          .popup-header {
            padding: 12px 10px;
          }

          .popup-header h3 {
            font-size: 16px;
          }

          .close-popup {
            width: 30px;
            height: 30px;
            font-size: 18px;
            top: 10px;
            right: 10px;
          }

          .admission-form {
            padding: 12px;
          }

          .form-row {
            gap: 12px;
            margin-bottom: 16px;
          }

          .form-group label {
            margin-bottom: 6px;
            font-size: 12px;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 9px 12px;
            font-size: 14px;
            border-radius: 6px;
          }

          .submit-btn {
            padding: 12px;
            font-size: 14px;
            margin-top: 6px;
          }

          .simple-checkbox {
            font-size: 12px;
          }

          .updates-header h3 {
            font-size: 18px;
          }

          .updates-header p {
            font-size: 12px;
          }

          .contact-info p {
            font-size: 12px;
          }

          .update-item h4 {
            font-size: 14px;
          }

          .update-item p {
            font-size: 12px;
          }
        }

        /* ============ VERY SHORT VIEWPORTS ============ */
        @media (max-height: 600px) {
          .popup-container {
            max-height: calc(100vh - 30px);
          }

          .admission-popup {
            max-height: calc(100vh - 30px);
          }

          .admission-form {
            padding: clamp(12px, 2vw, 20px);
          }
        }

        /* ============ LANDSCAPE MODE ============ */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-content {
            margin-top: 2%;
          }

          .hero-banner {
            height: 100vh;
          }

          .popup-container {
            max-height: 95vh;
          }

          .admission-form {
            padding: 12px;
          }
        }

        /* ============ VERY LARGE SCREENS ============ */
        @media (min-width: 1700px) {
          .hero-title {
            font-size: 56px;
          }

          .hero-subtitle {
            font-size: 48px;
          }

          .hero-description {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSlider;