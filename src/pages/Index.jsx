import { Container, Box, Heading, Text, VStack, HStack, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaFileInvoiceDollar, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Cloud9 Billing Dashboard</Heading>
          <Text fontSize="lg" color="gray.600">Manage your billing and invoices with ease</Text>
        </Box>

        <HStack justify="space-between">
          <Heading as="h2" size="lg">Invoices</Heading>
          <Button leftIcon={<FaPlus />} colorScheme="teal">Add Invoice</Button>
        </HStack>

        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Invoice ID</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>#001</Td>
                <Td>2023-10-01</Td>
                <Td>$100.00</Td>
                <Td>Paid</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton icon={<FaFileInvoiceDollar />} aria-label="View Invoice" />
                    <IconButton icon={<FaTrash />} aria-label="Delete Invoice" colorScheme="red" />
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>#002</Td>
                <Td>2023-10-05</Td>
                <Td>$250.00</Td>
                <Td>Pending</Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton icon={<FaFileInvoiceDollar />} aria-label="View Invoice" />
                    <IconButton icon={<FaTrash />} aria-label="Delete Invoice" colorScheme="red" />
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;