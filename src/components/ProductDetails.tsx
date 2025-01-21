"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  imageUrl: string
  slug: string
}

export function ProductDetails({ product }: { product: Product }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    // Simulate adding to cart
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsAddingToCart(false)
    alert("Product added to cart!")
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-4">{product.name}</CardTitle>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={handleAddToCart} disabled={isAddingToCart}>
          {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

