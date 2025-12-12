import { Box, Image, HStack, IconButton, Text, Heading, useToast } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/react'
import { useProductStore } from '../store/product'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "whiteAlpha.900");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct } = useProductStore()
    const toast = useToast()

    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid);
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true
            })
        }
    }

    return (
        <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s ease'
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
        >
            <Image src={product.image} alt={product.name} w="full" h={200} objectFit={"cover"} />

            <Box>   
                <Heading as={"h3"} size={"md"} mb={2}>
                    {product.name}
                </Heading>
                <Text fontSize={"lg"} fontWeight={"bold"} color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme='blue' aria-label="Edit Product" />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} aria-label="Delete Product" colorScheme="red" />
                </HStack>
            </Box>

        </Box>
    )
}

export default ProductCard;