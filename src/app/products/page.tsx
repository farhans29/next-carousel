"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$199.99",
    originalPrice: "$249.99",
    image: "/file.svg",
    rating: 4.5,
    reviews: 128,
    category: "Audio",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "$299.99",
    originalPrice: "$349.99",
    image: "/globe.svg",
    rating: 4.8,
    reviews: 256,
    category: "Wearables",
    description:
      "Advanced smartwatch with health monitoring, GPS, and long battery life.",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: "$89.99",
    originalPrice: "$119.99",
    image: "/window.svg",
    rating: 4.3,
    reviews: 89,
    category: "Audio",
    description:
      "Portable wireless speaker with premium sound and waterproof design.",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$79.99",
    originalPrice: "$99.99",
    image: "/file.svg",
    rating: 4.6,
    reviews: 167,
    category: "Gaming",
    description:
      "High-precision gaming mouse with customizable RGB lighting and macro settings.",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "$49.99",
    originalPrice: "$69.99",
    image: "/globe.svg",
    rating: 4.4,
    reviews: 92,
    category: "Accessories",
    description:
      "Adjustable laptop stand for comfortable typing and better ergonomics.",
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: "$59.99",
    originalPrice: "$79.99",
    image: "/window.svg",
    rating: 4.7,
    reviews: 143,
    category: "Accessories",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and fast charging capabilities.",
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: "$129.99",
    originalPrice: "$169.99",
    image: "/file.svg",
    rating: 4.5,
    reviews: 198,
    category: "Gaming",
    description:
      "Professional mechanical keyboard with customizable RGB and tactile switches.",
  },
  {
    id: 8,
    name: "Tablet Stand",
    price: "$34.99",
    originalPrice: "$49.99",
    image: "/globe.svg",
    rating: 4.2,
    reviews: 78,
    category: "Accessories",
    description:
      "Adjustable tablet stand with multiple viewing angles and sturdy construction.",
  },
  {
    id: 9,
    name: "Bluetooth Adapter",
    price: "$24.99",
    originalPrice: "$39.99",
    image: "/window.svg",
    rating: 4.1,
    reviews: 134,
    category: "Audio",
    description:
      "USB Bluetooth adapter for wireless connectivity with multiple device support.",
  },
  {
    id: 10,
    name: "Webcam HD",
    price: "$79.99",
    originalPrice: "$119.99",
    image: "/file.svg",
    rating: 4.4,
    reviews: 156,
    category: "Computing",
    description:
      "High-definition webcam with noise cancellation and autofocus technology.",
  },
  {
    id: 11,
    name: "Phone Case Pro",
    price: "$19.99",
    originalPrice: "$29.99",
    image: "/globe.svg",
    rating: 4.6,
    reviews: 223,
    category: "Accessories",
    description:
      "Premium protective phone case with shock absorption and slim profile.",
  },
  {
    id: 12,
    name: "Monitor Stand",
    price: "$39.99",
    originalPrice: "$59.99",
    image: "/window.svg",
    rating: 4.3,
    reviews: 87,
    category: "Accessories",
    description:
      "Height-adjustable monitor stand with storage compartment for organization.",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Products
                  </Link>

                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-2.5">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <button className="text-gray-700 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 8L7 13m0 0v6a2 2 0 002 2h8a2 2 0 002-2v-6"
                  />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium technology products
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -
                  {Math.round(
                    ((parseFloat(product.originalPrice.replace("$", "")) -
                      parseFloat(product.price.replace("$", ""))) /
                      parseFloat(product.originalPrice.replace("$", ""))) *
                      100
                  )}
                  %
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => openModal(product)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">Showing {products.length} products</p>
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Image */}
              <div className="mb-6">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    ({selectedProduct.reviews} reviews)
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {selectedProduct.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {selectedProduct.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    -
                    {Math.round(
                      ((parseFloat(
                        selectedProduct.originalPrice.replace("$", "")
                      ) -
                        parseFloat(selectedProduct.price.replace("$", ""))) /
                        parseFloat(
                          selectedProduct.originalPrice.replace("$", "")
                        )) *
                        100
                    )}
                    % OFF
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">ShopName</h3>
              <p className="text-gray-300 mb-4">
                Your trusted online shopping destination. We offer premium
                products at competitive prices with fast delivery and excellent
                customer service.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="*" className="text-gray-300 hover:text-white">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ShopName. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Image
                src="/file.svg"
                alt="Visa"
                width={32}
                height={12}
                className="h-8 w-auto"
              />
              <Image
                src="/window.svg"
                alt="Mastercard"
                width={32}
                height={12}
                className="h-8 w-auto"
              />
              <Image
                src="/globe.svg"
                alt="PayPal"
                width={32}
                height={12}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
