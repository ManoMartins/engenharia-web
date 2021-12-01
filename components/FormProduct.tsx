import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormProduct = () => {
  const { register } = useFormContext();

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Produtos</Heading>

      <FormControl>
        <FormLabel htmlFor="nomeProduto">Nome</FormLabel>
        <Input {...register("produtos.0.nome")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="descricaoProduto">Descrição</FormLabel>
        <Input {...register("produtos.0.descricao")} />
      </FormControl>
    </Stack>
  );
};
