"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number | string
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = async () => {
    setIsLoading(true)
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    alert(`Added ${product.name} to cart!`)
  }

  if (!product) {
    return null // or return a placeholder card
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name || "Product"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-2">{product.name || "Unnamed Product"}</CardTitle>
        <Badge variant="secondary" className="mb-2">
          {product.category || "Uncategorized"}
        </Badge>
        <p className="text-xl font-bold">
          ${typeof product.price === "number" ? product.price.toFixed(2) : (Number(product.price) || 0).toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={addToCart} disabled={isLoading}>
          {isLoading ? "Adding to Cart..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

