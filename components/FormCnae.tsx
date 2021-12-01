import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormCnaes = () => {
  const { register } = useFormContext();

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Cnaes</Heading>

      <FormControl>
        <FormLabel htmlFor="numero">Número</FormLabel>
        <Input {...register("cnaes.0.numero")} />
      </FormControl>
    </Stack>
  );
};
