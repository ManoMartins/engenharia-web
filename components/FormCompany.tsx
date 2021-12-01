import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

export const FormCompany = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "empresas",
  });

  useEffect(() => {
    append({
      tipoEmpresa: "",
    });
  }, [append]);

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Empresas</Heading>
      <Button
        onClick={() =>
          append({
            tipoEmpresa: "",
          })
        }
      >
        Adicionar empresa
      </Button>
      {fields.map((field, index) => (
        <Stack direction="row" key={field.id} alignItems="end">
          <FormControl>
            <FormLabel htmlFor="tipoEmpresa">Tipo de empresa</FormLabel>
            <Select {...register(`empresas.${index}.tipoEmpresa`)}>
              <option value="FILIAL">Filial</option>
              <option value="MATRIZ">Matriz</option>
            </Select>
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
