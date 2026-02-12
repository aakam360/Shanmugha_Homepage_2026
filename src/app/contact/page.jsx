// src/app/contact/page.jsx
import ContactUs from "@/components/institutions/ContactUs";
import StudentEnquiry from "@/components/institutions/popup-modal/StudentEnquiry";

export default function Page() {
  return (
    <>
      <StudentEnquiry autoOpen={true} />
      <ContactUs />
    </>
  );
}
