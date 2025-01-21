import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="mb-4">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
      <Link href="/products" className="text-primary hover:underline">
        Back to Products
      </Link>
    </div>
  )
}

