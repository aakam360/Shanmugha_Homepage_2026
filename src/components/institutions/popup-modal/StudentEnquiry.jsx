// "use client"; // This is REQUIRED for Next.js 14+

// import React, { useEffect, useRef, useState } from "react";

// const UG_COURSES = [
//   "B.Sc",
//   "B.A",
//   "B.Com",
//   "B.E / B.Tech",
//   "BBA",
//   "BCA",
//   "Other",
// ];
// const PG_COURSES = [
//   "M.Sc",
//   "M.A",
//   "M.Com",
//   "M.E / M.Tech",
//   "MBA",
//   "MCA",
//   "Other",
// ];

// export default function StudentEnquiry() {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [level, setLevel] = useState("");
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [otherCourse, setOtherCourse] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [mounted, setMounted] = useState(false);
//   const firstInputRef = useRef(null);

//   // Set mounted state on client only
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;

//     try {
//       const submitted = localStorage.getItem("studentEnquirySubmitted");
//       if (!submitted) {
//         setOpen(true);
//       }
//     } catch (e) {
//       setOpen(true);
//     }
//   }, [mounted]);

//   useEffect(() => {
//     if (!mounted || !open) return;

//     document.body.style.overflow = "hidden";
//     setTimeout(() => firstInputRef.current?.focus(), 50);

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open, mounted]);

//   const closeModal = () => {
//     // closing doesn't persist — the modal should reappear on reload unless submitted
//     setOpen(false);
//   };

//   const toggleCourse = (course) => {
//     setSelectedCourses((prev) => {
//       if (prev.includes(course)) return prev.filter((c) => c !== course);
//       return [...prev, course];
//     });
//   };

//   const validate = () => {
//     if (!name.trim()) return "Please enter full name";
//     if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
//       return "Enter a valid email";
//     if (!phone.trim() || phone.trim().length < 6) return "Enter a valid phone";
//     if (!level) return "Please select UG or PG";
//     if (selectedCourses.length === 0 && !otherCourse.trim())
//       return "Please select at least one course or specify";
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     const v = validate();
//     if (v) {
//       setError(v);
//       return;
//     }

//     setSubmitting(true);
//     try {
//       // TODO: replace with real API endpoint if available
//       const payload = {
//         name,
//         email,
//         phone,
//         level,
//         courses: selectedCourses.length ? selectedCourses : [otherCourse],
//         submittedAt: new Date().toISOString(),
//       };

//       // Simulate network request
//       await new Promise((r) => setTimeout(r, 700));

//       console.log("Student enquiry submitted:", payload);

//       // persist submitted state so modal is not shown again on reload
//       localStorage.setItem("studentEnquirySubmitted", "true");
//       setOpen(false);
//       // optionally you can show a toast or redirect here
//     } catch (err) {
//       setError("Submission failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Don't render anything during SSR
//   if (!mounted) return null;
//   if (!open) return null;

//   const courses =
//     level === "PG" ? PG_COURSES : level === "UG" ? UG_COURSES : [];

//   return (
//     <div
//       role="dialog"
//       aria-modal="true"
//       aria-label="Student Enquiry"
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 9999,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         backdropFilter: "blur(4px)",
//         padding: "1rem",
//         fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "600px",
//           borderRadius: "12px",
//           background: "#ffffff",
//           boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
//           maxHeight: "90vh",
//           overflow: "auto",
//           position: "relative",
//           border: "1px solid #e5e7eb",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             padding: "1.5rem 1.5rem 1rem",
//             borderBottom: "1px solid #f3f4f6",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-start",
//               marginBottom: "0.75rem",
//             }}
//           >
//             <div>
//               <h2
//                 style={{
//                   margin: 0,
//                   fontSize: "1.5rem",
//                   fontWeight: "600",
//                   color: "#111827",
//                 }}
//               >
//                 Student Enquiry Form
//               </h2>
//               <p
//                 style={{
//                   margin: "0.5rem 0 0",
//                   fontSize: "0.875rem",
//                   color: "#6b7280",
//                   lineHeight: "1.5",
//                 }}
//               >
//                 Please provide your details to help us assist you better.
//               </p>
//             </div>
//             <button
//               onClick={() => closeModal()}
//               aria-label="Close enquiry form"
//               style={{
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "1.25rem",
//                 cursor: "pointer",
//                 color: "#6b7280",
//                 padding: "0.25rem",
//                 borderRadius: "4px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "32px",
//                 height: "32px",
//                 transition: "all 0.2s ease",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.color = "#111827")}
//               onMouseOut={(e) => (e.currentTarget.style.color = "#6b7280")}
//             >
//               ✕
//             </button>
//           </div>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <div style={{ padding: "1.5rem" }}>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//                 gap: "1.25rem",
//                 marginBottom: "1.5rem",
//               }}
//             >
//               {/* Full Name */}
//               <div>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     marginBottom: "0.5rem",
//                     color: "#374151",
//                   }}
//                 >
//                   Full Name <span style={{ color: "#ef4444" }}>*</span>
//                 </label>
//                 <input
//                   ref={firstInputRef}
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter your full name"
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "8px",
//                     border: "1px solid #d1d5db",
//                     fontSize: "0.9375rem",
//                     backgroundColor: "#ffffff",
//                     color: "#111827",
//                     transition: "all 0.2s ease",
//                     outline: "none",
//                     boxSizing: "border-box",
//                   }}
//                   onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
//                   onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     marginBottom: "0.5rem",
//                     color: "#374151",
//                   }}
//                 >
//                   Email Address
//                   <span style={{ color: "#ef4444" }}>*</span>
//                 </label>
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "8px",
//                     border: "1px solid #d1d5db",
//                     fontSize: "0.9375rem",
//                     backgroundColor: "#ffffff",
//                     color: "#111827",
//                     transition: "all 0.2s ease",
//                     outline: "none",
//                     boxSizing: "border-box",
//                   }}
//                   onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
//                   onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                   required
//                   type="email"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     marginBottom: "0.5rem",
//                     color: "#374151",
//                   }}
//                 >
//                   Phone Number <span style={{ color: "#ef4444" }}>*</span>
//                 </label>
//                 <input
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Enter your phone number"
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "8px",
//                     border: "1px solid #d1d5db",
//                     fontSize: "0.9375rem",
//                     backgroundColor: "#ffffff",
//                     color: "#111827",
//                     transition: "all 0.2s ease",
//                     outline: "none",
//                     boxSizing: "border-box",
//                   }}
//                   onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
//                   onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                   required
//                 />
//               </div>

//               {/* Interested Level */}
//               <div>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     marginBottom: "0.5rem",
//                     color: "#374151",
//                   }}
//                 >
//                   Interested Level <span style={{ color: "#ef4444" }}>*</span>
//                 </label>
//                 <select
//                   value={level}
//                   onChange={(e) => {
//                     setLevel(e.target.value);
//                     setSelectedCourses([]);
//                     setOtherCourse("");
//                   }}
//                   style={{
//                     width: "100%",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "8px",
//                     border: "1px solid #d1d5db",
//                     fontSize: "0.9375rem",
//                     backgroundColor: "#ffffff",
//                     // color: "#111827",
//                     color: level ? "#111827" : "#6b7280",
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     outline: "none",
//                     boxSizing: "border-box",
//                     appearance: "none",
//                     backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "right 1rem center",
//                     backgroundSize: "1rem",
//                   }}
//                   onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
//                   onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                   required
//                 >
//                   <option value="">Select UG or PG</option>
//                   <option value="UG">Undergraduate (UG)</option>
//                   <option value="PG">Postgraduate (PG)</option>
//                 </select>
//               </div>

//               {/* Courses Selection */}
//               <div style={{ gridColumn: "1 / -1" }}>
//                 <label
//                   style={{
//                     display: "block",
//                     fontSize: "0.875rem",
//                     fontWeight: "500",
//                     marginBottom: "0.75rem",
//                     color: "#374151",
//                   }}
//                 >
//                   Which courses are you interested in?{" "}
//                   <span style={{ color: "#ef4444" }}>*</span>
//                 </label>

//                 {courses.length === 0 ? (
//                   <div
//                     style={{
//                       padding: "1rem",
//                       borderRadius: "8px",
//                       backgroundColor: "#f9fafb",
//                       color: "#6b7280",
//                       fontSize: "0.875rem",
//                       textAlign: "center",
//                       border: "1px dashed #d1d5db",
//                     }}
//                   >
//                     Please select UG or PG level first to see available courses
//                   </div>
//                 ) : (
//                   <div
//                     style={{
//                       display: "grid",
//                       gridTemplateColumns:
//                         "repeat(auto-fill, minmax(200px, 1fr))",
//                       gap: "0.75rem",
//                       marginBottom: "1rem",
//                     }}
//                   >
//                     {courses.map((course) => (
//                       <div
//                         key={course}
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           padding: "0.75rem 1rem",
//                           borderRadius: "8px",
//                           border: "1px solid #d1d5db",
//                           backgroundColor: selectedCourses.includes(course)
//                             ? "#eff6ff"
//                             : "white",
//                           cursor: "pointer",
//                           transition: "all 0.2s ease",
//                           userSelect: "none",
//                         }}
//                         onClick={() => toggleCourse(course)}
//                         onMouseOver={(e) => {
//                           if (!selectedCourses.includes(course)) {
//                             e.currentTarget.style.borderColor = "#3b82f6";
//                             e.currentTarget.style.backgroundColor = "#f8fafc";
//                           }
//                         }}
//                         onMouseOut={(e) => {
//                           if (!selectedCourses.includes(course)) {
//                             e.currentTarget.style.borderColor = "#d1d5db";
//                             e.currentTarget.style.backgroundColor = "white";
//                           }
//                         }}
//                       >
//                         <div
//                           style={{
//                             width: "20px",
//                             height: "20px",
//                             borderRadius: "4px",
//                             border: "2px solid",
//                             borderColor: selectedCourses.includes(course)
//                               ? "#3b82f6"
//                               : "#d1d5db",
//                             backgroundColor: selectedCourses.includes(course)
//                               ? "#3b82f6"
//                               : "transparent",
//                             marginRight: "0.75rem",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             flexShrink: 0,
//                             transition: "all 0.2s ease",
//                           }}
//                         >
//                           {selectedCourses.includes(course) && (
//                             <span
//                               style={{ color: "white", fontSize: "0.75rem" }}
//                             >
//                               ✓
//                             </span>
//                           )}
//                         </div>
//                         <span
//                           style={{
//                             fontSize: "0.9375rem",
//                             color: selectedCourses.includes(course)
//                               ? "#1e40af"
//                               : "#374151",
//                             fontWeight: selectedCourses.includes(course)
//                               ? "500"
//                               : "400",
//                           }}
//                         >
//                           {course}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Other Course Input */}
//                 <div style={{ marginTop: "1rem" }}>
//                   <label
//                     style={{
//                       display: "block",
//                       fontSize: "0.875rem",
//                       fontWeight: "500",
//                       marginBottom: "0.5rem",
//                       color: "#374151",
//                     }}
//                   >
//                     Other Course
//                   </label>
//                   <input
//                     value={otherCourse}
//                     onChange={(e) => setOtherCourse(e.target.value)}
//                     placeholder="Enter a course not listed above"
//                     style={{
//                       width: "100%",
//                       padding: "0.75rem 1rem",
//                       borderRadius: "8px",
//                       border: "1px solid #d1d5db",
//                       fontSize: "0.9375rem",
//                       backgroundColor: "#ffffff",
//                       color: "#111827",
//                       transition: "all 0.2s ease",
//                       outline: "none",
//                       boxSizing: "border-box",
//                     }}
//                     onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
//                     onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div
//                 style={{
//                   padding: "0.875rem 1rem",
//                   borderRadius: "8px",
//                   backgroundColor: "#fef2f2",
//                   border: "1px solid #fecaca",
//                   color: "#b91c1c",
//                   fontSize: "0.875rem",
//                   marginBottom: "1.5rem",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.5rem",
//                 }}
//               >
//                 <span style={{ fontSize: "1rem" }}>⚠</span>
//                 <span>{error}</span>
//               </div>
//             )}

//             {/* Form Actions */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 gap: "0.75rem",
//                 paddingTop: "1rem",
//                 borderTop: "1px solid #f3f4f6",
//               }}
//             >
//               <button
//                 type="button"
//                 onClick={() => closeModal()}
//                 style={{
//                   padding: "0.75rem 1.5rem",
//                   borderRadius: "8px",
//                   border: "1px solid #d1d5db",
//                   background: "white",
//                   color: "#374151",
//                   fontSize: "0.9375rem",
//                   fontWeight: "500",
//                   cursor: "pointer",
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.backgroundColor = "#f9fafb";
//                   e.currentTarget.style.borderColor = "#9ca3af";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.backgroundColor = "white";
//                   e.currentTarget.style.borderColor = "#d1d5db";
//                 }}
//               >
//                 Close
//               </button>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 style={{
//                   padding: "0.75rem 1.5rem",
//                   borderRadius: "8px",
//                   border: "none",
//                   background: submitting ? "#93c5fd" : "#3b82f6",
//                   color: "white",
//                   fontSize: "0.9375rem",
//                   fontWeight: "500",
//                   cursor: submitting ? "not-allowed" : "pointer",
//                   transition: "all 0.2s ease",
//                   minWidth: "140px",
//                 }}
//                 onMouseOver={(e) => {
//                   if (!submitting) {
//                     e.currentTarget.style.backgroundColor = "#2563eb";
//                   }
//                 }}
//                 onMouseOut={(e) => {
//                   if (!submitting) {
//                     e.currentTarget.style.backgroundColor = "#3b82f6";
//                   }
//                 }}
//               >
//                 {submitting ? (
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <span
//                       style={{
//                         display: "inline-block",
//                         width: "1rem",
//                         height: "1rem",
//                         border: "2px solid rgba(255,255,255,0.3)",
//                         borderTopColor: "white",
//                         borderRadius: "50%",
//                         animation: "spin 1s linear infinite",
//                         marginRight: "0.5rem",
//                       }}
//                     />
//                     Submitting...
//                   </span>
//                 ) : (
//                   "Submit Enquiry"
//                 )}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Add CSS for spinner animation */}
//       <style jsx>{`
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client"; // REQUIRED for Next.js 14+

import React, { useEffect, useRef, useState } from "react";

const PROGRAMS = [
  "Engineering",
  "Pharmacy",
  "Nursing",
  "Allied Health Science",
  "Medical Science & Research",
];

export default function StudentEnquiry() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const submitted = localStorage.getItem("studentEnquirySubmitted");
    if (!submitted) setOpen(true);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !open) return;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, mounted]);

  const closeModal = () => setOpen(false);

  const validate = () => {
    if (!name.trim()) return "Please enter full name";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return "Enter a valid email address";
    if (!phone.trim() || phone.trim().length < 6)
      return "Enter a valid phone number";
    if (!program) return "Please select a program";
    if (!consent) return "You must agree to the consent statement";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name,
        email,
        phone,
        program,
        consent,
        submittedAt: new Date().toISOString(),
      };

      await new Promise((r) => setTimeout(r, 700));
      console.log("Student enquiry submitted:", payload);

      localStorage.setItem("studentEnquirySubmitted", "true");
      setOpen(false);
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Student Enquiry"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        padding: "1rem",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          backgroundColor: "#ffffff",
          color: "#111827",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div style={{ padding: "1.5rem", borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  }}
>
  {/* Logo */}
  <img
    src="/assets/images/logo/ssei-only-logo.png"
    alt="Sri Shanmugha Educational Institutions"
    style={{
      height: "52px",
      objectFit: "contain",
      flexShrink: 0,
    }}
  />

  {/* Header Text */}
  <div>
    <h2
      style={{
        margin: 0,
        fontSize: "1.5rem",
        fontWeight: 600,
        color: "#111827",
        lineHeight: "1.2",
      }}
    >
      Student Enquiry Form
    </h2>

    <p
      style={{
        marginTop: "0.25rem",
        fontSize: "0.875rem",
        color: "#6b7280",
        lineHeight: "1.4",
      }}
    >
      Please provide your details to help us assist you better.
    </p>
  </div>
</div>

            <button
              onClick={closeModal}
              aria-label="Close enquiry form"
              style={{
                background: "none",
                border: "none",
                fontSize: "1.25rem",
                cursor: "pointer",
                color: "#6b7280",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ padding: "1.5rem" }}>
            {/* 2-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <input
                ref={firstInputRef}
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />

              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                required
                style={inputStyle}
              >
                <option value="">Select Program *</option>
                {PROGRAMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Consent */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                marginTop: "1.25rem",
                fontSize: "0.875rem",
                color: "#374151",
              }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                style={{
                  marginTop: "0.2rem",
                  width: "16px",
                  height: "16px",
                  accentColor: "#3b82f6",
                  backgroundColor: "#ffffff",
                  colorScheme: "light",
                }}
              />
              By submitting this form, I consent to receive communications from
              the Sri Shanmugha Educational Institutions through WhatsApp, SMS,
              Email, phone Calls, and other channels, even if my number is
              registered with DND/NDNC.
            </label>

            {/* Error */}
            {error && (
              <div
                style={{
                  marginTop: "1rem",
                  color: "#b91c1c",
                  fontSize: "0.875rem",
                }}
              >
                ⚠ {error}
              </div>
            )}

            {/* Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1.5rem",
              }}
            >
              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: submitting ? "#93c5fd" : "#3b82f6",
                  color: "#ffffff",
                  fontSize: "0.9375rem",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "0.9375rem",
  backgroundColor: "#ffffff",
  color: "#111827",
  colorScheme: "light",
  outline: "none",
};
