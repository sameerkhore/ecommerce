import { ProductCard } from "@/components/ProductCard"

async function getProducts() {
  const res = await fetch("https://next-ecommerce-template-4.vercel.app/api/product", { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  const data = await res.json()
  console.log("API Response:", data) // Log the response
  return data
}

export default async function ProductsPage() {
  const data = await getProducts()

  // Check if data is an object with a products property
  const products = Array.isArray(data) ? data : data.products

  if (!products || products.length === 0) {
    return <div className="container mx-auto py-8">No products found.</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

