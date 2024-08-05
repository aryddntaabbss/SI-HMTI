import React, { useState } from "react";
import axios from "axios";
import GuestLayout from "../../layouts/GuestLayout";
import { BASE_API_URL } from "../../constants/apiURL";

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subject: "",
    pesan: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      message: "Contact Form Submission",
      kontak: {
        ...formData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        id: 0,
      },
    };

    // Log the payload to verify its structure
    // console.log("Payload being sent:", payload);

    try {
      const response = await axios.post(`${BASE_API_URL}/api/kontak`, payload);
      if (response.status === 200) {
        setFormData({
          nama: "",
          email: "",
          subject: "",
          pesan: "",
        });
        alert("Pesan berhasil dikirim!");
      } else {
        setError("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (err) {
      console.error("Error while sending message:", err); // Log error details
      if (err.response) {
        console.error("Response data:", err.response.data);
        setError(`Kesalahan: ${err.response.data.message || err.message}`);
      } else {
        setError("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestLayout>
      <div className="h-full flex items-center container mx-auto lg:py-28 py-10 px-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/contact-banner.png`}
                alt="Contact"
                className="md:max-w-2xl rounded-lg my-10"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-5xl font-semibold mb-4 lg:text-6xl">
              Mari Berbagi & Berkolaborasi, Sampaikan Pesan & Kesan Anda!
            </p>
            <p className="text-2xl underline font-bold md:text-3xl mb-4">
              #HMTITetapSatu
            </p>
            <h2 className="text-5xl md:text-7xl font-bold italic text-blue-600 mb-10">
              Kontak Kami
            </h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row bg-transparent">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="bg-transparent border-b-2 px-4 py-2 mb-4 md:mr-2 md:flex-grow focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-transparent border-b-2 px-4 py-2 mb-4 md:ml-2 md:flex-grow focus:outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border-b-2 px-4 py-2 mb-4 focus:outline-none"
                required
              />
              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Deskripsi"
                className="bg-transparent border-b-2 px-4 py-2 mb-4 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className={`bg-blue-500 rounded-lg text-white py-2 px-4 hover:bg-blue-600 transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Contact;
