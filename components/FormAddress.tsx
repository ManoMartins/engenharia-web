import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormAddress = () => {
  const { register } = useFormContext();

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Endereço</Heading>

      <FormControl>
        <FormLabel htmlFor="cep">CEP</FormLabel>
        <Input {...register("endereco.cep")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="logradouro">Logradouro</FormLabel>
        <Input {...register("endereco.logradouro")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="numero">Número</FormLabel>
        <Input {...register("endereco.numero")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="bairro">Bairro</FormLabel>
        <Input {...register("endereco.bairro")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="complemento">Complemento</FormLabel>
        <Input {...register("endereco.complemento")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="cidade">Cidade</FormLabel>
        <Input {...register("endereco.cidade.descricao")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="estado">Estado</FormLabel>
        <Input {...register("endereco.cidade.estado.descricao")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="pais">País</FormLabel>
        <Input {...register("endereco.cidade.estado.pais.descricao")} />
      </FormControl>
    </Stack>
  );
};
