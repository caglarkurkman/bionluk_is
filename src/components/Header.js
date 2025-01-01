import React from 'react';

const Navbar = () => {
    return (
        <nav className="border-b">
            {/* Üst Menü (Yeşil Alan) */}
            <div className="bg-green-700 text-white text-sm py-4 px-2">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Sol Menü */}
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:underline">Anasayfa</a></li>
                        <li><a href="#" className="hover:underline">Hakkımızda</a></li>
                        <li><a href="#" className="hover:underline">Hizmetlerimiz</a></li>
                        <li><a href="#" className="hover:underline">Mağazalar</a></li>
                        <li><a href="#" className="hover:underline">Markalar</a></li>
                    </ul>

                    {/* Sağ Menü */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:underline">Hakkımızda</a>
                        <a href="#" className="hover:underline">İade Politikası</a>
                        <a href="#" className="hover:underline">Yardım Merkezi</a>
                        <a href="#" className="hover:underline">Mağaza Aç</a>
                        <select className="bg-green-700 border-none text-white">
                            <option>Eng</option>
                            <option>Tr</option>
                        </select>
                        <select className="bg-green-700 border-none text-white">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>TRY</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Alt Menü */}
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                {/* Arama Kutusu */}
                <div className="flex justify-center items-center border rounded-full px-4 mx-auto py-2 w-1/3">
                    <input
                        type="text"
                        placeholder="Aradığınız ürün veya markayı yazınız..."
                        className="flex-grow focus:outline-none"
                    />
                    <button className="text-green-700">
                        🔍
                    </button>
                </div>
                {/* Sağ İkonlar */}
                <div className="flex items-center space-x-4">
                    <button className="text-green-700">
                        🤍
                    </button>
                    <button className="relative text-green-700">
                        🔔
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                    </button>
                    <button className="border border-green-700 text-green-700 rounded-full px-4 py-1 hover:bg-green-700 hover:text-white">
                        İlan Giriş
                    </button>
                    <button className="bg-green-700 text-white rounded-full px-4 py-1 hover:bg-green-800">
                        Üye Giriş
                    </button>
                </div>
            </div>

            {/* Kategoriler Menüsü */}
            <div className="container mx-auto border-t">
                <div className="flex items-center space-x-2 px-4 mx-12 text-black font-medium border-x border-gray-300 py-2 w-40">
                    <i className="fa-solid fa-th-large text-black"></i> {/* Iconun rengi siyah yapıldı */}
                    <span>Kategoriler</span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;