import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

export const FormService = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "servicos",
  });

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Serviços</Heading>

      <Button
        onClick={() =>
          append({
            codigo: "",
            descricao: "",
            dataInicio: "",
          })
        }
      >
        Adicionar servico
      </Button>

      {fields.map((field, index) => (
        <Stack direction="row" key={field.id} alignItems="end">
          <FormControl>
            <FormLabel htmlFor="nome">Código</FormLabel>
            <Input {...register(`servicos.${index}.codigo`)} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="descricao">Descrição</FormLabel>
            <Input {...register(`servicos.${index}.descricao`)} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="dataInicio">Data inicio</FormLabel>
            <Input {...register(`servicos.${index}.dataInicio`)} />
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
