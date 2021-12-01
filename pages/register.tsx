import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { FormProduct } from "../components/FormProduct";
import { FormService } from "../components/FormService";
import { FormProvider as MyFormProvider } from "../components/FormProvider";
import { FormCnaes } from "../components/FormCnae";
import { FormContact } from "../components/FormContact";
import { FormAddress } from "../components/FormAddress";

import { FormProvider, useForm } from "react-hook-form";
import api from "./services/api";
import { FormCompany } from "../components/FormCompany";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";

interface FormTypeSubmit {
  cnpj: string;
  email: string;
  incricaoEstadual: string;
  incricaoMunicipal: string;
  razaoSocial: string;
  nomeFantasia: string;
  tipoFornecedor: "VENDAS" | "SERVICOS";
  status: "ATIVO" | "INATIVO";
  endereco: {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cidade: {
      descricao: string;
      estado: { descricao: string; pais: { descricao: string } };
    };
  };
  telefone: {
    ddd: string;
    numero: string;
    tipoTelefone: { descricao: string };
  };
  contato: {
    nome: string;
    idade: number;
    email: string;
    telefone: {
      ddd: string;
      numero: string;
      tipoTelefone: { descricao: string };
    };
    departamento: { descricao: string };
  };
  produtos: [{ nome: string; descricao: string }];
  cnaes: { numero: string }[];
  empresas: { tipoEmpresa: "FILIAL" | "MATRIZ" }[];
}

const Register = () => {
  const methods = useForm({
    defaultValues: {
      cnaes: [{ numero: "" }],
      empresas: [{ tipoEmpresa: "FILIAL" }],
      produtos: [{ nome: "", descricao: "" }],
      servicos: [{ codigo: "", descricao: "", dataInicio: "" }],
    },
  });
  const toast = useToast({ position: "top-right" });
  const router = useRouter();

  const onSubmit = async (data: FormTypeSubmit) => {
    try {
      await api.post("/salvar?operacao=SALVAR", {
        ...data,
        status: data.status ? "ATIVO" : "INATIVO",
      });

      toast({
        title: "Sucesso",
        description: "Cadastro realizado com sucesso",
        status: "success",
      });
    } catch (e: any) {
      let messageError = e.response.data.msg;
      if (messageError) {
        messageError = messageError.split("\n");
        messageError = messageError.map((item: string) => {
          return <p key={item}>{item}</p>;
        });
      } else {
        messageError = "Erro ao realizar cadastro";
      }

      toast({
        title: "Erro",
        description: messageError,
        status: "error",
      });
    }
  };

  return (
    <Box m="4rem auto" maxW="1200px">
      <Button
        leftIcon={<FiArrowLeft />}
        mb="10"
        colorScheme="blue"
        onClick={() => router.back()}
      >
        Voltar
      </Button>

      <FormProvider {...methods}>
        <Stack
          spacing="8"
          w="full"
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <MyFormProvider />
          <FormCnaes />
          <FormContact />
          <FormAddress />
          <FormProduct />
          <FormService />
          <FormCompany />
          <Button type="submit" colorScheme="blue">
            Cadastrar
          </Button>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default Register;
