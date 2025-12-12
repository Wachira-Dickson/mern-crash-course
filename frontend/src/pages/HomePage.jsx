import { Container, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useProductStore } from '../store/product';
import  ProductCard  from '../component/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, teal.500, green.500)"}
        bgClip={"text"}
        textAlign={"center"} >
          Current Products 
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

        </SimpleGrid>

        {products.length === 0 && (
          <Text fontsize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            No Products Found {" "}
            <Link to={ "/create" }>
              <Text as={"span"} color={"teal.500"} textDecoration={"underline"}>
                Create a new product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage
