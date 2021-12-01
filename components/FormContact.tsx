import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormContact = () => {
  const { register } = useFormContext();

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Contato</Heading>

      <FormControl>
        <FormLabel htmlFor="nome">Nome</FormLabel>
        <Input {...register("contato.nome")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="idade">Idade</FormLabel>
        <Input {...register("contato.idade")} defaultValue="0" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("contato.email")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="departamento">Departamento</FormLabel>
        <Input {...register("contato.departamento.descricao")} />
      </FormControl>

      <Stack direction="row">
        <FormControl flex="1">
          <FormLabel htmlFor="ddi">DDI</FormLabel>
          <Input {...register("contato.telefone.ddi")} />
        </FormControl>

        <FormControl flex="1">
          <FormLabel htmlFor="ddd">DDD</FormLabel>
          <Input {...register("contato.telefone.ddd")} />
        </FormControl>

        <FormControl flex="5">
          <FormLabel htmlFor="numero">Número</FormLabel>
          <Input {...register("contato.telefone.numero")} />
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel htmlFor="tipoTelefone">Tipo de Telefone</FormLabel>
        <Select {...register("contato.telefone.tipoTelefone.descricao")}>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="celular">Celular</option>
        </Select>
      </FormControl>
    </Stack>
  );
};
