import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormService = () => {
  const { register } = useFormContext()

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Serviços</Heading>

      <FormControl>
        <FormLabel htmlFor="nome">Código</FormLabel>
        <Input {...register("servicos.0.codigo")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="descricao">Descrição</FormLabel>
        <Input {...register("servicos.0.descricao")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="dataInicio">Data inicio</FormLabel>
        <Input {...register("servicos.0.dataInicio")} />
      </FormControl>
    </Stack>
  );
};
