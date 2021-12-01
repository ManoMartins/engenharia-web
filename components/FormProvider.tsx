import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export const FormProvider = () => {
  const { watch, register } = useFormContext();

  return (
    <Stack as="fieldset" shadow="md" px="8" py="12" borderRadius="md">
      <Heading as="legend">Fornecedor</Heading>

      <FormControl right="0">
        <FormLabel htmlFor="status">Status</FormLabel>
        <Switch
          {...register("status")}
          defaultChecked={watch("status") === "ATIVO" ? true : false}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="razaoSocial">Razão Social</FormLabel>
        <Input {...register("razaoSocial")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="nomeFantasia">Nome Fantasia</FormLabel>
        <Input {...register("nomeFantasia")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="incricaoEstadual">Incrição Estadual</FormLabel>
        <Input {...register("incricaoEstadual")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="incricaoMunicipal">Incrição Municipal</FormLabel>
        <Input {...register("incricaoMunicipal")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
        <Input {...register("cnpj")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("email")} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="tipoFornecedor">Tipo Fornecedor</FormLabel>
        <Select {...register("tipoFornecedor")}>
          <option value="VENDAS">Vendas</option>
          <option value="SERVICOS">Serviços</option>
        </Select>
      </FormControl>

      <Stack direction="row">
        <FormControl flex="1">
          <FormLabel htmlFor="ddi">DDI</FormLabel>
          <Input {...register("telefone.ddi")} />
        </FormControl>

        <FormControl flex="1">
          <FormLabel htmlFor="ddd">DDD</FormLabel>
          <Input {...register("telefone.ddd")} />
        </FormControl>

        <FormControl flex="5">
          <FormLabel htmlFor="numeroTelefoneFornecedor">Número</FormLabel>
          <Input {...register("telefone.numero")} />
        </FormControl>
      </Stack>

      <FormControl>
        <FormLabel htmlFor="tipoTelefone">Tipo de Telefone</FormLabel>
        <Select {...register("telefone.tipoTelefone.descricao")}>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="celular">Celular</option>
        </Select>
      </FormControl>
    </Stack>
  );
};
