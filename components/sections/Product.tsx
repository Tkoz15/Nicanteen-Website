"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ShoppingCart } from "lucide-react";

const colors = [
  { name: "Midnight Black", hex: "#000000", className: "bg-black" },
  { name: "Forest Green", hex: "#22c55e", className: "bg-green-500" },
  { name: "Slate Gray", hex: "#64748b", className: "bg-slate-500" },
  { name: "Arctic White", hex: "#ffffff", className: "bg-white border border-gray-300" },
];

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleShopClick = () => {
    const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_URL || "https://your-shopify-store.com";
    window.open(shopifyUrl, "_blank");
  };

  return (
    <section id="product" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className={`w-64 h-40 ${selectedColor.className} rounded-lg shadow-2xl transform rotate-3 transition-all duration-300`}></div>
                <p className="mt-8 text-sm text-muted-foreground">Product image placeholder</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Nicanteen Pouch Carrier
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The ultimate accessory for nicotine pouch users. Our premium carrier keeps your pouches organized, 
                fresh, and easily accessible wherever you go.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">Choose Your Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-12 h-12 rounded-full ${color.className} transition-transform hover:scale-110`}
                    title={color.name}
                  >
                    {selectedColor.name === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check className={`h-6 w-6 ${color.name === "Arctic White" ? "text-gray-800" : "text-white"}`} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Selected: {selectedColor.name}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm">Holds up to 20 pouches securely</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm">Snap-lock closure keeps contents fresh</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm">Slim 10mm profile fits any pocket</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm">Made from durable, BPA-free plastic</span>
              </div>
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto brand-gradient hover:opacity-90"
              onClick={handleShopClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Buy Now on Shopify
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}