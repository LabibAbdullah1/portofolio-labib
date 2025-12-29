import { FaAward, FaCalendarAlt } from "react-icons/fa";

const Certificates = ({cert}) => {
    return (
        <div
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            {/* Bagian Gambar Sertifikat */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Icon saat hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <FaAward className="text-white text-4xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                </div>
            </div>

            {/* Bagian Info */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{cert.issuer}</p>

                <div className="flex items-center text-gray-500 text-sm border-t pt-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>Diterbitkan: {cert.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Certificates;