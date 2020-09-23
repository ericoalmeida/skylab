//import Head from 'next/head'
import {
  Heading,
  Grid,
  Flex,
  Input,
  Link,
  Button,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
} from "@chakra-ui/core";
import { GoMarkGithub } from "react-icons/go";

import Divider from "../components/divider";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
    '. . . .'
    '. logo form .'
    '. . . .'
    "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDirection="column" alignItems="flex-start">
        <img src="/ericoalmeida.svg" alt="rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Stack spacing={2}>
          <InputGroup>
            <InputLeftElement
              height="50px"
              children={<Icon name="email" color="gray.600" />}
            />
            <Input
              height="50px"
              backgroundColor="gray.800"
              focusBorderColor="blue.500"
              borderRadius="sm"
              placeholder="E-mail"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              height="50px"
              children={<Icon name="lock" color="gray.600" />}
            />

            <Input
              height="50px"
              backgroundColor="gray.800"
              focusBorderColor="blue.500"
              borderRadius="sm"
              placeholder="Senha"
            />
          </InputGroup>
        </Stack>

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="blue.600"
          fontWeight="bold"
          _hover={{ color: "blue.500" }}
        >
          Esqueci minha senha
        </Link>

        <Button
          marginTop={6}
          backgroundColor="blue.500"
          height="50px"
          borderRadius="sm"
          _hover={{ backgroundColor: "blue.600" }}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem um conta?{" "}
          <Link
            color="blue.600"
            fontWeight="bold"
            _hover={{ color: "blue.500" }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>

          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: "blue.500" }}
          >
            <Box
              as={GoMarkGithub}
              color="white.100"
              size="16px"
              marginRight="3"
              opacity={0.6}
            />
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
