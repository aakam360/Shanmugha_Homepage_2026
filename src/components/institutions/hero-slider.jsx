"use client";

import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  fetchPrimaryEvents,
  selectPrimaryEvents,
} from "../institutions/redux/features/homepageEventsSlice";
import ToastMessage from "../institutions/helpers/ToastMessage";

const HeroSlider = () => {
  // const dispatch = useDispatch();
  // const primary_events = useSelector(selectPrimaryEvents);

  const [isUpdatesVisible, setIsUpdatesVisible] = useState(true);
  const [showUpdatesPopup, setShowUpdatesPopup] = useState(false);
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);
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

  // Program -> Courses data
  const programs = [
    {
      name: "B.E",
      courses: ["BME", "CSE", "ECE", "MECH", "CS&E"],
    },
    {
      name: "B.TECH",
      courses: ["AGRI", "AI&DS", "IT", "LE"],
    },
    {
      name: "M.E",
      courses: [],
    },
    {
      name: "Pharmacy",
      courses: ["PHARM.D", "M.PHARM", "B.PHARM", "B.PHARM(LE)", "D.PHARM"],
    },
    {
      name: "Nursing",
      courses: ["B.Sc Nursing"],
    },
    {
      name: "Allied Health Science",
      courses: [
        "B.Sc (CT)",
        "B.Sc (RIT)",
        "B.Sc (OT&AT)",
        "B.Sc (OPTOMETRY)",
        "B.Sc (MLT)",
        "B.Sc (CPPCT)",
      ],
    },
  ];

 

  useEffect(() => {
    let timeoutId;
    const setup = () => {
      if (window.innerWidth <= 1024) {
        timeoutId = setTimeout(() => setShowUpdatesPopup(true), 5000);
      }
    };
    setup();
    const handleResize = () => {
      if (window.innerWidth > 1024) setShowUpdatesPopup(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showUpdatesPopup || showAdmissionPopup) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = original);
    }
  }, [showUpdatesPopup, showAdmissionPopup]);

  // Listen for global event from header (or elsewhere) to open the admission popup
  useEffect(() => {
    const openHandler = () => setShowAdmissionPopup(true);
    window.addEventListener("openAdmissionPopup", openHandler);
    return () => window.removeEventListener("openAdmissionPopup", openHandler);
  }, []);

  const toggleUpdatesVisibility = () => setIsUpdatesVisible((v) => !v);
  const closeUpdatesPopup = () => setShowUpdatesPopup(false);
  const openAdmissionPopup = () => setShowAdmissionPopup(true);
  const closeAdmissionPopup = () => setShowAdmissionPopup(false);

  // When the course select is focused on small screens, show as a listbox (size>1) so it scrolls within the popup
  const handleCourseFocus = (e) => {
    if (window.innerWidth <= 480) {
      try { e.target.size = 6; } catch (err) { /* ignore if not supported */ }
    }
  };
  const handleCourseBlur = (e) => {
    if (window.innerWidth <= 480) {
      try { e.target.size = 1; } catch (err) { /* ignore if not supported */ }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (name === "program") {
        // Selecting a program resets the course
        return { ...prev, program: value, course: "" };
      }
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });

    // If a select was changed on small screens, collapse the listbox back to single-line
    if ((name === "course" || name === "program") && window.innerWidth <= 480) {
      try { e.target.size = 1; } catch (err) { /* ignore if not supported */ }
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

      // Optionally parse response JSON
      let data = null;
      try { data = await response.json(); } catch (err) { /* ignore non-json responses */ }
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
                <h1 className="hero-title">
                  Sri Shanmugha Educational Institutions
                </h1>
                <h2 className="hero-subtitle">Innovate and Inspire</h2>
                <p className="hero-description">
                  Pioneering Innovation in Higher Education Since 2010. With 15+
                  Years of Educational Excellence, 20,000+ Students Transformed,
                  100+ Quality Awards, and 95% Placement Success.
                </p>
                <div className="hero-cta-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={openAdmissionPopup}
                  >
                    Apply Now
                  </button>
                  <a
                    href="/assets/docs/brochure.pdf"
                    className="btn btn-secondary"
                    download
                  >
                    Download Brochure
                  </a>
                </div>
              </div>

              <aside
                className={`campus-updates desktop-only ${
                  isUpdatesVisible ? "visible" : "hidden"
                }`}
                aria-live="polite"
                aria-hidden={!isUpdatesVisible}
              >
                <div className="updates-header">
                  <h3>Campus Updates</h3>
                  <p>Notifications & alerts</p>
                  <button
                    className="close-updates"
                    onClick={toggleUpdatesVisibility}
                    aria-label="Close updates"
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

              <button
                className={`updates-toggle desktop-only ${
                  !isUpdatesVisible ? "visible" : "hidden"
                }`}
                onClick={toggleUpdatesVisibility}
                aria-label="Show updates"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Updates Popup */}
      {showUpdatesPopup && (
        <div
          className="mobile-updates-popup-overlay"
          role="dialog"
          aria-modal="true"
        >
          <div className="mobile-updates-popup">
            <aside className="campus-updates popup-card">
              <div className="updates-header">
                <h3>Campus Updates</h3>
                <p>Notifications & alerts</p>
                <button
                  className="close-updates"
                  onClick={closeUpdatesPopup}
                  aria-label="Close updates"
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
                <button
                  className="close-popup"
                  onClick={closeAdmissionPopup}
                  aria-label="Close admission enquiry"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="admission-form">
                {/* Row 1: Full Name + Mobile */}
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
                    <label htmlFor="mobile">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                {/* Row 2: Email + City */}
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

                {/* Row 3: State + Program */}
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

                {/* Row 4: Course (depends on Program) */}
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="course">Course {"*"}</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      onFocus={handleCourseFocus}
                      onBlur={handleCourseBlur}
                      required={
                        (
                          programs.find((p) => p.name === formData.program)
                            ?.courses || []
                        ).length > 0
                      }
                      disabled={
                        (
                          programs.find((p) => p.name === formData.program)
                            ?.courses || []
                        ).length === 0
                      }
                    >
                      <option value="">
                        {formData.program
                          ? (
                              programs.find((p) => p.name === formData.program)
                                ?.courses || []
                            ).length > 0
                            ? "Select a course"
                            : "No courses available"
                          : "Select a program first"}
                      </option>
                      {(
                        programs.find((p) => p.name === formData.program)
                          ?.courses || []
                      ).map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message (full width) */}
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

                {/* Consent */}
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
                    By submitting this form, I consent to receive communications
                    from the Sri Shanmugha Educational Institutions through
                    WhatsApp, SMS, Email, phone Calls, and other channels, even
                    if my number is registered with DND/NDNC. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

        /* ... [All previous hero & popup styles remain unchanged] ... */

        .hero-banner {
          position: relative;
          width: 100%;
          height: 95vh;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
        }
        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        // .video-background {
        //   position: absolute;
        //   top: 50%;
        //   left: 50%;
        //   transform: translate(-50%, -50%);
        //   min-width: 90%;
        //   min-height: 90%;
        //   object-fit: cover;
        //   z-index: 1;
        // }

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
          background: linear-gradient(
            180deg,
            rgba(66, 95, 189, 0.85) 0%,
            rgba(66, 95, 189, 0.5) 50%,
            rgba(66, 95, 189, 0.2) 100%
          );
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
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }

        .hero-content {
          margin-top: 5%;
          flex: 1;
          max-width: 620px;
          margin-left: -7%;
        }
        .hero-title {
          font-size: 45px;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
          max-width: 120ch;
          line-height: 50px
        }
        .hero-subtitle {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #facc15;
        }
        .hero-description {
          font-size: 1.6rem;
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
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 5;
          margin-bottom: 1.5rem;
        }

        .btn {
          text-align: center;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          border: 2px solid transparent;
          cursor: pointer;
          transition: 0.25s ease;
          min-height: auto;
          line-height: 1.3;
          box-sizing: border-box;
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
        }
        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .campus-updates {
          width: 400px;
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
        }

        .updates-header {
          position: relative;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .updates-header h3 {
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
        }
        .updates-header p {
          margin: 6px 0 0;
          font-size: 1.05rem;
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
        }
        .close-updates:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #111827;
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
          font-size: 1.2rem;
          color: #111827;
        }
        .update-item p {
          margin: 0;
          font-size: 1.05rem;
          color: #4b5563;
        }
        .update-item.stat .update-number {
          display: block;
          font-size: 2.4rem;
          font-weight: 800;
          color: #3b82f6;
        }
        .update-item.stat .update-label {
          font-size: 0.98rem;
          color: #6b7280;
        }

        .contact-info {
          margin-top: 10px;
        }
        .contact-info p {
          margin: 4px 0;
          font-size: 1rem;
        }
        .email {
          color: #2563eb;
        }

        .desktop-only.campus-updates {
          margin-top: 4%;
          margin-right: 2%;
        }

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
          font-size: 0.95rem;
          transition: transform 0.2s ease, background 0.2s ease;
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

        .mobile-updates-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          pointer-events: auto;
        }

        .mobile-updates-popup {
          width: 100%;
          max-width: 420px;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }

        .popup-card {
          width: 100%;
          max-width: 400px;
          max-height: 90vh;
          pointer-events: auto;
        }

        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
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
          height: 80vh;
          max-height: 80vh;
          box-sizing: border-box;
          animation: slideUp 0.3s ease;
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
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .popup-header {
          background: #facc15;
          color: white;
          padding: 24px;
          position: relative;
        }

        .popup-header h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        }

        .close-popup {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 24px;
          color: white;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: background 0.2s;
        }

        .close-popup:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* === LANDSCAPE FORM STYLING === */
        .admission-form {
          padding: 32px;
          flex: 1 1 auto;
          overflow-y: auto;
        }

        .form-row {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group.half {
          flex: 1;
          min-width: 0;
        }

        .form-group.full {
          width: 100%;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #425fbd;
          box-shadow: 0 0 0 3px rgba(66, 95, 189, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .consent-group {
          margin-top: 12px;
          margin-bottom: 24px;
        }
        .consent-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #374151;
          line-height: 1.4;
        }
        .consent-label input[type="checkbox"] {
          margin-top: 4px;
          transform: scale(1.1);
        }
        .consent-label a {
          color: #425fbd;
          text-decoration: underline;
        }
        .consent-label a:hover {
          color: #2d4ab3;
        }

        .simple-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          line-height: 1.5;
        }

        /* hide native checkbox */
        .simple-checkbox input {
          display: none;
        }

        /* box */
        .simple-checkbox .box {
          width: 16px;
          height: 16px;
          border: 1.5px solid #14b8a6;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* tick (centered) */
        .simple-checkbox input:checked + .box::after {
          content: "✓";
          font-size: 12px;
          color: #14b8a6;
          line-height: 1;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #425fbd, #2d4ab3);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 8px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(66, 95, 189, 0.3);
        }

        /* Mobile: stack fields */
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 20px;
          }
          .form-group.half {
            width: 100%;
          }
        }

        @media (min-width: 1025px) {
          .campus-updates {
            display: block;
          }
          .desktop-only.campus-updates {
            display: block;
          }
          .mobile-updates-popup-overlay {
            display: none;
          }
          .updates-toggle {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only.campus-updates {
            display: none;
          }
          .updates-toggle {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .hero-banner {
            height: 100vh;
            min-height: 100vh;
          }
          .hero-layout {
            flex-direction: column;
          }
          .hero-content {
            max-width: 100%;
            margin-top: 14%;
            margin-left: 0;
            padding: 0 15px;
            text-align: center;
          }
          .hero-cta-buttons {
            flex-direction: column;
          }
          .hero-content-overlay {
            padding-top: 190px;
          }
          .popup-card {
            max-width: 95%;
          }
          .admission-form {
            padding: 24px;
          }
          .popup-header {
            padding: 20px;
          }
          .popup-header h3 {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .admission-form {
            padding: 20px;
          }
          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 10px 14px;
            font-size: 15px;
          }
          .submit-btn {
            padding: 14px;
            font-size: 15px;
          }
        }

        /* Fallback for very short viewports: allow the popup to fit with a small margin */
        @media (max-height: 600px) {
          .popup-container {
            height: auto;
            max-height: calc(100vh - 40px);
          }
          .admission-popup {
            max-height: calc(100vh - 40px);
          }
        }

        /* Make the select rendered as a listbox (when size>1) scrollable inside the popup on touch devices */
        .admission-popup select {
          max-width: 100%;
        }
        .admission-popup select[size] {
          max-height: 70vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 375px) {
          ..hero-title.jsx-c2fcf90897928ac5 {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSlider;