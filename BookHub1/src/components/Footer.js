import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-blue-400 text-xl font-semibold mb-4">Here your day starts</h3>
          <p className="leading-relaxed">
            Grab your favorite books and dive into new adventures with BookHub!
          </p>
        </div>
        <div>
          <h3 className="text-blue-400 text-xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-2">📧 info@bookhub.com</p>
          <p className="mb-2">📞 +961 81 25 27 20</p>
          <p>📍 Sofsaf, Ein-Elhelwi</p>
        </div>
      </div>
      <div className="text-center pt-8 mt-8 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; 2025 BookHub Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;