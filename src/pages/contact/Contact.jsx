import React from "react";
import GuestLayout from "../../layouts/GuestLayout";

const Contact = () => {
  return (
    <GuestLayout>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Kolom Pertama */}
          <div className="flex flex-col">
            <p className="text-7xl mb-4">
              Mari Berbagi & Berkolaborasi, Sampaikan Pesan & Kesan Anda!
            </p>
            <p className="text-4xl font-bold mb-4">#HMTITetapSatu</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/contact-banner.png`}
              alt="Contact"
              className="w-full rounded-lg my-10"
            />
          </div>

          {/* Kolom Kedua */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold italic text-blue-600 mb-28">
              Kontak Kami
            </h2>
            <form className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="Nama"
                  className="border rounded-md px-4 py-2 mb-4 md:mr-2 md:flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md px-4 py-2 mb-4 md:ml-2 md:flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Deskripsi"
                className="border max-h-96 rounded-md px-4 py-2 mb-4 h-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Contact;
