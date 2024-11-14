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
      console.error("Error while sending message:", err);
      if (err.response) {
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
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue py-10">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/contact.gif`}
              alt="Contact"
              className="max-w-full"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col justify-center p-6">
            <p className="text-4xl font-semibold mb-4 lg:text-5xl">
              Mari Berbagi & Berkolaborasi
            </p>
            <p className="text-xl font-bold text-gray-400 mb-4">
              #HMTITetapSatu
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
              Kontak Kami
            </h2>

            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-between">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="bg-transparent border-b-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-transparent border-b-2 px-4 py-2 lg:mt-0 mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border-b-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Deskripsi"
                className="bg-transparent border-b-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ${
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
