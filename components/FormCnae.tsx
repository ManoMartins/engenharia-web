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

export const FormCnaes = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cnaes",
  });

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Cnaes</Heading>

      <Button onClick={() => append({ numero: "" })}>Adicionar cnae</Button>

      {fields.map((field, index) => (
        <Stack direction="row" key={field.id} alignItems="end">
          <FormControl>
            <FormLabel htmlFor="numero">Número</FormLabel>
            <Input {...register(`cnaes.${index}.numero`)} />
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
