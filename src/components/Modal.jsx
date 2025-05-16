import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md w-full animate-scaleFade">
        <h2 className="text-3xl md:text-4xl lg:py-4  font-Dangrek font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
          សូមស្វាគមន៍មកកាន់ Portfolio របស់ខ្ញុំ
        </h2>
        <p className="text-center text-gray-200 text-lg mb-6 leading-relaxed font-Siemreap">
          សួស្តី! 👋 ខ្ញុំបាទឈ្មោះ ហុក វ៉ាន់ធីវ ជាអ្នកអភិវឌ្ឍន៍ Frontend និង Backend ដ៏ពេញចិត្ត 
          ដែលចូលចិត្តបង្កើតគេហទំព័រដ៏ស្រស់ស្អាត ។ រីករាយក្នុងការស្វែងយល់ពីគម្រោង 
          និងជំនាញរបស់ខ្ញុំ។ សូមអរគុណសម្រាប់ការទស្សនា! 🚀
        </p>
        <button
          onClick={onClose}
          className="w-full py-3 font-Dangrek rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold shadow-md transition-all duration-300"
        >
          ចាប់ផ្ដើមស្វែងយល់
        </button>
      </div>
    </div>
  );
};

export default Modal;
