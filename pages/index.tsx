import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "./services/api";
import Link from "next/link";
import { useRouter } from "next/router";

interface EntidadeData {
  email: string;
  cnpj: string;
  incricaoEstadual: string;
  incricaoMunicipal: string;
  razaoSocial: string;
  nomeFantasia: string;
  tipoFornecedor: "SERVICOS" | "PRODUTOS";
  status: "ATIVO" | "INATIVO";
  id: number;
}

interface Props {
  list: {
    entidades: EntidadeData[];
  };
}

const Home = (props: Props) => {
  const toast = useToast({ position: "top-right" });

  const [providers, setProviders] = useState(props.list.entidades);
  const [filterCategory,setFilterCategory] = useState("");
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      await api.post(`/listar?operacao=EXCLUIR`, {
        id,
      });

      const response = await api.get("/listar");
      setProviders(response.data.entidades);

      toast({
        title: "Sucesso",
        description: "Fornecedor excluído com sucesso",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível excluir o fornecedor",
        status: "error",
      });
    }
  };

  const filterProviders = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await api.post(`/listar?operacao=CONSULTAR`, {
        [filterCategory]: event.target.value,
      });

      setProviders(response.data.entidades);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível filtrar os fornecedores",
        status: "error",
      });
    }
  }

  return (
    <Box maxW="1400px" m="12rem auto">
      <Flex justifyContent="space-between" mb="10">
        <Stack direction="row" w="40rem">
          <Input w="70%" placeholder="Filtro..." onChange={filterProviders} />
          <Select w="30%" onChange={e => setFilterCategory(e.target.value)}>
            <option value="cnpj">CNPJ</option>
            <option value="razaoSocial">Razão Social</option>
            <option value="nomeFantasia">Nome Fantasia</option>
          </Select>
        </Stack>

        <Link href="/register">
          <a>
            <Button colorScheme="blue">Cadastrar</Button>
          </a>
        </Link>
      </Flex>

      <Table>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>CNPJ</Th>
            <Th>Inscrição Estadual</Th>
            <Th>Inscrição Municipal</Th>
            <Th>Razão Social</Th>
            <Th>Nome Fantasia</Th>
            <Th>Tipo Fornecedor</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          {providers?.map((entidade) => (
            <Tr key={entidade.id}>
              <Td>{entidade.email}</Td>
              <Td>{entidade.cnpj}</Td>
              <Td>{entidade.incricaoEstadual}</Td>
              <Td>{entidade.incricaoMunicipal}</Td>
              <Td>{entidade.razaoSocial}</Td>
              <Td>{entidade.nomeFantasia}</Td>
              <Td>{entidade.tipoFornecedor}</Td>
              <Td>{entidade.status}</Td>
              <Td>
                <ButtonGroup>
                  <IconButton
                    size="sm"
                    icon={<FiEdit />}
                    colorScheme="blue"
                    onClick={() => router.push(`/${entidade.id}`)}
                    aria-label="Editar"
                  />

                  <IconButton
                    size="sm"
                    colorScheme="red"
                    icon={<FiTrash />}
                    aria-label="Excluir"
                    onClick={() => handleDelete(entidade.id)}
                  />
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/listar");

  return {
    props: {
      list: response.data,
    },
  };
};

export default Home;
