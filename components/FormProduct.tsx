import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

export const FormProduct = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "produtos",
  });

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Produtos</Heading>

      <Button
        onClick={() =>
          append({
            nome: "",
            descricao: "",
          })
        }
      >
        Adicionar produto
      </Button>

      {fields.map((field, index) => (
        <Stack direction="row" key={field.id} alignItems="end">
          <FormControl>
            <FormLabel htmlFor="nomeProduto">Nome</FormLabel>
            <Input {...register(`produtos.${index}.nome`)} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="descricaoProduto">Descrição</FormLabel>
            <Input {...register(`produtos.${index}.descricao`)} />
          </FormControl>
          
          <IconButton
            icon={<FiTrash />}
            colorScheme="red"
            aria-label="remove tipo"
            onClick={() => remove(index)}
          />
        </Stack>
      ))}
    </Stack>
  );
};
